import { GameConstants } from "@common/constants";
import { Skins } from "@common/definitions";
import { Obstacles } from "@common/definitions/obstacles";
import { PerkData, PerkIds, type PerkDefinition } from "@common/definitions/perks";
import { PerkManager } from "@common/utils/perkManager";
import { weightedRandom } from "@common/utils/random";
import { type Player } from "../objects";
import { GunItem } from "./gunItem";

export type UpdatablePerkDefinition = PerkDefinition & { readonly updateInterval: number };

export class ServerPerkManager extends PerkManager {
    private readonly _selfData: Record<string, unknown> = {};

    constructor(
        readonly owner: Player,
        perks?: number | readonly PerkDefinition[]
    ) {
        super(perks);
    }

    /**
     * Adds a perk to this manager
     * @param perk The perk to add
     * @returns Whether the perk was already present (and thus nothing has changed)
     */
    override addPerk(perk: PerkDefinition): boolean {
        const idString = perk.idString;
        const absent = super.addPerk(perk);

        if ("updateInterval" in perk) {
            (this.owner.perkUpdateMap ??= new Map<UpdatablePerkDefinition, number>())
                .set(perk as UpdatablePerkDefinition, this.owner.game.now);
        }

        if (absent) {
            // ! evil starts here
            // some perks need to perform setup when added
            switch (idString) {
                case PerkIds.Costumed: {
                    const { choices } = PerkData[PerkIds.Costumed];

                    this.owner.activeDisguise = Obstacles.fromString(
                        weightedRandom(
                            Object.keys(choices),
                            Object.values(choices)
                        )
                    );
                    this.owner.setDirty();
                    break;
                }
                case PerkIds.PlumpkinBomb: {
                    this.owner.halloweenThrowableSkin = true;
                    this.owner.setDirty();
                    break;
                }
                case PerkIds.Lycanthropy: {
                    [this._selfData["Lycanthropy::old_skin"], this.owner.loadout.skin] = [this.owner.loadout.skin, Skins.fromString("werewolf")];
                    this.owner.setDirty();
                    this.owner.action?.cancel();
                    this.owner.inventory.dropWeapon(0, true)?.destroy();
                    this.owner.inventory.dropWeapon(1, true)?.destroy();

                    // Drop all throwables
                    while (this.owner.inventory.getWeapon(3)) {
                        this.owner.inventory.dropWeapon(3, true)?.destroy();
                    }

                    /* TODO: continue crying */
                    break;
                }
                case PerkIds.ExtendedMags: {
                    const weapons = this.owner.inventory.weapons;
                    const maxWeapons = GameConstants.player.maxWeapons;
                    for (let i = 0; i < maxWeapons; i++) {
                        const weapon = weapons[i];

                        if (!(weapon instanceof GunItem)) continue;

                        const def = weapon.definition;

                        if (def.extendedCapacity === undefined) continue;

                        const extra = weapon.ammo - def.extendedCapacity;
                        if (extra > 0) {
                            // firepower is anti-boosting this weapon, we need to shave the extra rounds off
                            weapon.ammo = def.extendedCapacity;
                            this.owner.inventory.giveItem(def.ammoType, extra);
                        }
                    }
                    break;
                }
            }
            // ! evil ends here
        }

        this.owner.dirty.perks ||= absent;
        return absent;
    }

    /**
     * Removes a perk from this manager
     * @param perk The perk to remove
     * @returns Whether the perk was present (and therefore removed, as opposed
     * to not being removed due to not being present to begin with)
     */
    override removePerk(perk: PerkDefinition): boolean {
        const idString = perk.idString;

        if ("updateInterval" in perk) {
            this.owner.perkUpdateMap?.delete(perk as UpdatablePerkDefinition);
        }

        const has = super.removePerk(perk);

        if (has) {
            // ! evil starts here
            // some perks need to perform cleanup on removal
            switch (idString) {
                case PerkIds.Lycanthropy: {
                    this.owner.loadout.skin = Skins.fromStringSafe(this._selfData["Lycanthropy::old_skin"] as string) ?? Skins.fromString("hazel_jumpsuit");
                    this.owner.setDirty();
                    break;
                }
                case PerkIds.ExtendedMags: {
                    const weapons = this.owner.inventory.weapons;
                    const maxWeapons = GameConstants.player.maxWeapons;
                    for (let i = 0; i < maxWeapons; i++) {
                        const weapon = weapons[i];

                        if (!(weapon instanceof GunItem)) continue;

                        const def = weapon.definition;
                        const extra = weapon.ammo - def.capacity;
                        if (extra > 0) {
                            // firepower boosted this weapon, we need to shave the extra rounds off
                            weapon.ammo = def.capacity;
                            this.owner.inventory.giveItem(def.ammoType, extra);
                        }
                    }
                    break;
                }
                case PerkIds.PlumpkinBomb: {
                    this.owner.halloweenThrowableSkin = false;
                    this.owner.setDirty();
                    break;
                }
                case PerkIds.Costumed: {
                    this.owner.activeDisguise = undefined;
                    this.owner.setDirty();
                    break;
                }
            }
            // ! evil ends here
        }

        this.owner.dirty.perks ||= has;
        return has;
    }
}
