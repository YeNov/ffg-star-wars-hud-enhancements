# FFG Star Wars HUD Enhancements

A Foundry VTT module for the [Star Wars FFG](https://github.com/StarWarsFoundryVTT/StarWarsFFG) system that adds a compact HUD overlay for viewing and adjusting wounds and strain directly from the canvas.

## Features

- **Wounds & Strain tracking** — Displays current and max values for wounds/strain (characters) or hull trauma/system strain (vehicles) in a small overlay panel.
- **Quick adjustments** — +1 / -1 buttons let owners modify stats without opening the character sheet.
- **Threshold warnings** — Values that exceed the maximum are highlighted in red.
- **Permission-aware** — Players with Observer permission can view the HUD; only Owners see the adjustment buttons. GMs can always see it.
- **Vehicle support** — Automatically detects vehicles and shows Hull Trauma / System Strain instead.
- **Actor type handling** — Strain is hidden for minions and rivals, matching the FFG RPG rules.
- **Live updates** — The HUD re-renders whenever the underlying actor data changes, regardless of who made the change.

## How It Works

1. **Select a token** on the canvas — the HUD panel appears in the top-left corner showing that token's stats.
2. **Deselect all tokens** — the HUD closes automatically.
3. If multiple tokens are selected, the HUD displays the first controlled token.
4. You can also toggle the HUD via the **heart-pulse icon** in the Token controls toolbar.

## Installation

### Manual

1. Download or clone this repository into your Foundry VTT `Data/modules/` directory:
   ```
   Data/modules/ffg-star-wars-hud-enhancements/
   ```
2. Restart Foundry VTT (or return to Setup).
3. In your world, go to **Settings > Manage Modules** and enable **FFG Star Wars HUD Enhancements**.

### Manifest URL

Use the following URL in Foundry's **Install Module** dialog:

```
https://github.com/YeNov/ffg-star-wars-hud-enhancements/main/module.json
```

## Requirements

- Foundry VTT v13+
- [Star Wars FFG](https://github.com/StarWarsFoundryVTT/StarWarsFFG) game system

## License

This project is provided as-is for personal and community use.

## Contributing

If you want to contribute to project or spot an issue/bug regarding either functionality or usability, feel free to open issue on github and/or create pull requests
