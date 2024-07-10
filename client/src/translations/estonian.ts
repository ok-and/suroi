import type { TranslationMap } from "../translations";

export const ESTONIAN_TRANSLATIONS: TranslationMap = {
    "name": "Eesti",
    "flag": "🇪🇪",

    "msg_rotate": "Paremaks mängimiskogemuseks palun hoidke seadet horisontaalselt.",
    "msg_loading": "Ühendumine",
    "msg_err_joining": "Viga mänguga ühinemisel.",
    "msg_err_finding": "Viga mängu otsimisel.",
    "msg_spectating": "Jälgite",
    "msg_enter_team_code": "Sisesta tiimi kood:",
    "msg_lost_team_connection": "Ühendus tiimiga katkes.",
    "msg_error_joining_team": "Viga tiimiga liitumisel.<br>Seda ei pruugi olla olemas või see on täis.", // <br> here is an HTML break-line element. DO NOT TOUCH OR MOVE.
    "msg_try_again": "Palun proovige uuesti.",
    "msg_warning": "Teid on hoiatatud!",
    "msg_warning_msg": "Te olete saanud mängu moderaatoritelt hoiatuse põhjusega: <reason>",
    "msg_temp_ban": "Teil on ajutine Suroi mängimise keeld!",
    "msg_temp_ban_msg": "Teile määrati ajutine keeld põhjusega: <reason>",
    "msg_perma_ban": "Teil on püsiv Suroi mängimise keeld!",
    "msg_perma_ban_msg": "Teile määrati püsiv keeld põhjusega: <reason>",
    "msg_no_reason": "Põhjust pole esitatud.",

    "play_solo": "Mängi Soolot",
    "play_duo": "Mängi Duot",
    "play_squad": "Mängi Squaade",
    "join_team": "Liitu Tiimiga",
    "msg_locked_tooltip": "Mäng vahetub soolo ja duo vahel iga 24 tunni tagant, kuna mõlema jaoks korraga ei ole piisavalt palju mängijaid.",
    "rules_and_tutorial": "Reeglid ja Juhend",
    "news": "Uudised",
    "loadout": "Välimus",
    "settings": "Seaded",
    "fullscreen": "Täisekraan",
    "resume": "Jätka",
    "quit": "Lahku",
    "none": "Puudub",
    "copy": "Kopeeri",

    "health": "elu",
    "adrenaline": "adrenaliini",

    "settings_volume": "Helitugevus",
    "settings_keybinds": "Klaviatuur",
    "settings_graphics": "Graafika",
    "settings_interface": "Kasutajaliides",
    "settings_save_load": "Salvesta/Laadi",
    "settings_mobile": "Mobiilseade",
    "settings_require_reload": "* Nende seadete muutmise korral tuleb veebileht uuesti laadida",
    "settings_performance_warning": "* See seade võib põhjustada probleeme osadel seadetel. Juhul kui te ei saa mänguga liituda, lülitage see seade välja.",

    "settings_master_volume": "Põhi helitugevus",
    "settings_sfx_volume": "Heliefektide helitugevus",
    "settings_music_volume": "Muusika helitugevus",
    "settings_old_menu_music": "Vana avamenüü taustamuusika",

    "settings_render_mode": "Renderdusrežiim",
    "settings_render_resolution": "Renderduse kvaliteet",
    "settings_render_resolution_auto": "Automaatne",
    "settings_hires_textures": "Kõrge kvaliteediga graafika",
    "settings_antialias": "Antialiasing",
    "settings_movement_smoothing": "Liikumiste silumine",
    "settings_responsive_rotation": "Reageeriv pöörlemisrežiim",
    "settings_camera_shake": "Vaatevälja rappumine",

    "settings_interface_scale": "Kasutajaliidese suurus",
    "settings_minimap_opacity": "Väikese kaardi läbipaistvus",
    "settings_fs_map_opacity": "Täisekraani kaardi läbipaistvus",
    "settings_hide_minimap": "Peida väike kaart",
    "settings_blur_splash": "Udusta avamenüü taust",
    "settings_hide_rules": "Peida reeglite nupp",
    "settings_warn_before_leaving": "Hoiata enne mängust lahkumist",
    "settings_show_fps": "Näita FPSi",
    "settings_show_ping": "Näita pingi",
    "settings_show_coordinates": "Näita koordinaata",
    "settings_anon_names": "Anonüümsed mängijate nimed",
    "settings_hide_emotes": "Peida emotikonid",
    "settings_text_killfeed": "Tekstipõhised tapmiste teavitused",
    "settings_colored_weapon_slots": "Värvitud relva taustad",
    "settings_scope_looping": "Tsüklipõhine sihihikute valik",
    "settings_draw_hud": "Renderda HUD",
    "settings_autopickup": "Automaatne rüüstamine",
    "settings_autopickup_dual_guns": "Rüüsta topelt relvad automaatselt",

    "settings_load_settings": "Laadi seaded",
    "settings_copy_settings": "Kopeeri seaded lõikelauale",
    "settings_reset_settings": "Lähtesta seaded",

    "settings_reload": "Laadi uuesti",
    "settings_mobile_controls": "Käivita mobiilseadme juhtimisskeem",
    "settings_joystick_size": "Juhtkangi suurus",
    "settings_joystick_opacity": "Juhtkangi läbipaistvus",

    "loadout_skins": "Riietus",
    "loadout_emotes": "Emotikonid",
    "loadout_crosshairs": "Niitristikud",
    "loadout_badges": "Tunnusmärgid",
    "loadout_special": "Spetsiaalsed seadistused",
    "loadout_crosshairs_default": "Vaikimisi",
    "loadout_crosshairs_size": "Suurus:",
    "loadout_crosshairs_color": "Värv:",
    "loadout_crosshairs_stroke_size": "Piirjoone paksus:",
    "loadout_crosshairs_stroke_color": "Piirjoone värv:",

    "emotes_category_People": "Inimesed",
    "emotes_category_Text": "Tekst",
    "emotes_category_Memes": "Meemid",
    "emotes_category_Icons": "Ikoonid",
    "emotes_category_Misc": "Muu",

    "featured_youtubr": "Esiletoodud Youtubr",
    "featured_streamr": "Esiletoodud Streamr",

    "btn_report": "Raporteeri",
    "btn_spectate_kill_leader": "Jälgi Tapmiste Liidrit",
    "btn_spectate": "Jälgi",
    "btn_play_again": "Mängi Uuesti",
    "btn_menu": "Menüü",

    "msg_waiting_for_leader": "Liidrit oodatakse",
    "msg_you_died": "Sa surid.",
    "msg_player_died": "<player> suri.",
    "msg_win": "Võit on Teie!",
    "msg_your_rank": "Koht",

    "msg_kills": "Tapmisi: <kills>",

    "gas_waiting": "Mürgine gaas liigub <time> pärast",
    "gas_advancing": "Mürgine gaas liigub edasi! Liikuge ohutusse tsooni",
    "gas_inactive": "Mängijaid oodatakse...",

    "action_open_door": "Ava Uks",
    "action_close_door": "Sulge Uks",
    "action_revive": "Elusta <player>",
    "action_cancel": "Katkesta",
    "action_reloading": "Relva laadimine...",
    "action_reviving": "Elustamine...",
    "action_being_revived": "Teid elustatakse...",
    "action_gauze_use": "Tarlataani Kasutamine",
    "action_medikit_use": "Esmaabipaki Kasutamine",
    "action_cola_use": "Energiajoogi Joomine",
    "action_tablets_use": "Tablettide Võtmine",

    "interact_airdrop_crate_locked": "Ava Õhudessant",
    "interact_control_panel": "Aktiveeri Juhtpaneel",
    "interact_generator": "Aktiveeri Generaator",
    "interact_button": "Vajuta Nupule",

    "loading_spritesheets": "<progress> Spraiditabelit Laaditud",
    "loading_connecting": "Ühendumine",
    "loading_joining_game": "Mänguga Ühendumine",
    "loading_fetching_data": "Serveri Andmete Vastuvõtmine...",
    "loading_finding_game": "Mängu Otsimine",

    "keybind_clear_tooltip": "Klahviseose eemaldamiseks vajuta sellele ning seejärel vajuta <kbd>Escape</kbd> või <kbd>Backspace</kbd> klahvi.",
    "keybind_reset": "Taasta algseadistused",
    "bindings_+up": "Liigu Üles",
    "bindings_+down": "Liigu Alla",
    "bindings_+left": "Liigu Vasakule",
    "bindings_+right": "Liigu Paremale",
    "bindings_interact": "Kasuta",
    "bindings_loot": "Rüüsta",
    "bindings_slot 0": "Varusta Esimene Relv",
    "bindings_slot 1": "Varusta Teine Relv",
    "bindings_slot 2": "Varusta Lähivõitlusrelv",
    "bindings_equip_or_cycle_throwables 1": "Varusta/Vaheta Granaati",
    "bindings_last_item": "Varusta Viimane Relv",
    "bindings_other_weapon": "Varusta Muu Relv",
    "bindings_swap_gun_slots": "Vaheta Relvad",
    "bindings_cycle_items -1": "Varusta Eelmine Relv",
    "bindings_cycle_items 1": "Varusta Järgmine Relv",
    "bindings_+attack": "Kasuta Relva",
    "bindings_drop": "Kukuta Aktiivne Relv",
    "bindings_reload": "Laadi Relva",
    "bindings_cycle_scopes -1": "Eelmine Sihik",
    "bindings_cycle_scopes 1": "Järgmine Sihik",
    "bindings_use_consumable gauze": "Kasuta Tarlataani",
    "bindings_use_consumable medikit": "Kasuta Esmaabipakki",
    "bindings_use_consumable cola": "Kasuta Energiajooki",
    "bindings_use_consumable tablets": "Kasuta Tablette",
    "bindings_cancel_action": "Katkesta Tegevus",
    "bindings_+view_map": "Ava/Sulge Kaart",
    "bindings_toggle_map": "Ava/Sulge Täisekraani Kaart",
    "bindings_toggle_minimap": "Näita Väkest Kaarti",
    "bindings_toggle_hud": "Näita HUDi",
    "bindings_+emote_wheel": "Ava Emotikonide Valik",
    "bindings_+map_ping_wheel": "Vaheta Kaardipingile",
    "bindings_+map_ping": "Ava Kaardipingi Valik",
    "bindings_toggle_console": "Ava/Sulge Console",
    "bindings_toggle_slot_lock": "Relva Lukk",

    "kf_suicide_kill": "<player> tegi enesetapu",
    "kf_suicide_down": "<player> lõi iseennast maha",
    "kf_two_party_kill": "<player> tappis <victim>",
    "kf_two_party_down": "<player> lõi <victim> maha",
    "kf_bleed_out_kill": "<player> jooksis verest tühjaks",
    "kf_bleed_out_down": "<player> jooksis mittesurmavalt verest tühjaks",
    "kf_finished_off_kill": "<player> lõpetas <victim> elu",
    "kf_finished_off_down": "<player> lõpetas õrnalt <victim> elu",
    "kf_finally_died": "<player> lõpuks suri",
    "kf_finally_ended_themselves": "<player> lõpetas lõpuks enda elu",
    "kf_finally_killed": "<player> lõpuks tapeti",
    "kf_finally_down": "<player> löödi lõpuks maha",
    "kf_gas_kill": "<player> suri gaasi kätte",
    "kf_gas_down": "<player> löödi maha gaasi pärast",
    "kf_airdrop_kill": "<player> purustati surmavalt õhudessanti poolt",
    "kf_airdrop_down": "<player> löödi maha õhudessanti poolt",
    "kf_kl_promotion": "<player> ülendati Tapmiste Liidriks!",
    "kf_kl_killed": "<player> tappis Tapmiste Liidri",
    "kf_kl_dead": "Tapmiste Liider on surnud!",
    "kf_kl_suicide": "Tapmiste Liider tappis iseennast!",

    // ------------------------------------------------------------------
    "finally": "lõpuks",
    "with": "kasutades",

    // Kill modal only
    "you": "Sa",
    "yourself": "ise ennast",
    "km_killed": "tapsid",
    "km_knocked": "lõid maha",

    "km_message": "<you> <finally> <event> <victim>`i <with> <weapon>",

    // Killfeed.
    "kf_killed": "tappis",
    "kf_knocked": "lõi maha",
    "kf_finished_off": "lõpetas",
    "themselves": "ise ennast",

    "kf_message": "<player> <finally> <event> <victim>`i <with> <weapon>",
    // ------------------------------------------------------------------

    "tt_restores": "<item> taastab <amount> <type>",
    "tt_reduces": "<item> vähendab saadud kahju <percent>% võrra",

    "go_kills": "Tapmisi:",
    "go_damage_done": "Kahju Tehtud:",
    "go_damage_taken": "Kahju Saadud:",
    "go_time_alive": "Aeg elus:",

    "create_team": "Loo Tiim",
    "create_team_autofill": "Täida Automaatselt",
    "create_team_lock": "Lukusta Tiim",
    "create_team_waiting": "Ootel...",
    "create_team_play": "Alusta Mängu",

    "report_reporting": "Raporteerite",
    "report_id": "Raporti ID:",
    "report_instructions": `
    <p><strong>Palun jälgige allolevaid juhiseid!</strong> Kui teie raport ei vasta juhistele, ignoreeritakse seda.</p>
    <h4>Kuidas Esitada Raporti</h4>
    <ol>
      <li>Liituge <a href="https://discord.suroi.io">Discordi serveriga.</a></li>
      <li>Minge <a href="https://discord.com/channels/1077043833621184563/1135288369526607973">#cheater-reports
          kanalisse.</a></li>
      <li>Lugege raporti esitamise juhendid kinnitatud postitusest läbi.</li>
      <li>Esitage raport postitusena.</li>
    </ol>`,

    "languages": "Keeled",

    // loot

    "gauze": "Tarlataan",
    "medikit": "Esmaabipakk",
    "cola": "Energiajook",
    "tablets": "Tabletid",

    "basic_vest": "Lihtne Vest",
    "regular_vest": "Tavaline Vest",
    "tactical_vest": "Taktikaline Vest",
    "basic_helmet": "Lihtne Kiiver",
    "regular_helmet": "Tavaline Kiiver",
    "tactical_helmet": "Taktikaline Kiiver",
    "bag": "Kott", // This shouldn't show up in game
    "basic_pack": "Väike Seljakott",
    "regular_pack": "Tavaline Seljakott",
    "tactical_pack": "Suur Seljakott",

    "1x_scope": "1x Sihik", // This shouldn't show up in game
    "2x_scope": "2x Sihik",
    "4x_scope": "4x Sihik",
    "8x_scope": "8x Sihik",
    "15x_scope": "15x Sihik",

    "fists": "Rusikad",
    "baseball_bat": "Pesapallikurikas",
    "hatchet": "Kirves",
    "kbar": "K-bar",
    "maul": "Palginui",
    "gas_can": "Bensiinikanister",
    "heap_sword": "HE-AP Mõõk",
    "steelfang": "Teraskihv",
    "ice_pick": "Jääork",
    "seax": "Võitlusnuga",
    "crowbar": "Kang",
    "sickle": "Sirp",

    "frag_grenade": "Käsigranaat",
    "smoke_grenade": "Suitsugranaat",
    "confetti_grenade": "Ilutulestiku Granaat",

    "mosin": "Mossin-Nagant",
    "radio": "Raadio",
    "lewis_gun": "Lewise Kuulipilduja",
    "deathray": "Surmakiir",
    "firework_launcher": "Ilutulestiku Heitja",
    "s_g17": "G17 (sihikuga)",
    "arena_closer": "Maailmade Hävitaja",

    // For dual guns
    "dual_template": "Topelt <gun>",

    // Regions
    "region_dev": "Lokaalne Server",
    "region_na": "Põhja-Ameerika",
    "region_eu": "Euroopa",
    "region_sa": "Lõuna-Ameerika",
    "region_as": "Aasia"
};
