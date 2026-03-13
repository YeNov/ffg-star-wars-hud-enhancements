import { WoundsStrainHUD } from "./hud-panel.js";

let hudPanel = null;

Hooks.once("ready", () => {
  hudPanel = new WoundsStrainHUD();
});

Hooks.on("controlToken", (token, controlled) => {
  if (!hudPanel) return;

  const controlled_tokens = canvas.tokens.controlled;
  if (controlled_tokens.length > 0) {
    hudPanel.setToken(controlled_tokens[0]);
  } else {
    hudPanel.clearToken();
  }
});

Hooks.on("updateActor", (actor, changed, options, userId) => {
  if (!hudPanel?._token) return;
  if (hudPanel._token.actor?.id !== actor.id) return;
  hudPanel.render({ force: false });
});

Hooks.on("canvasReady", () => {
  if (!hudPanel) return;
  hudPanel.clearToken();
});

Hooks.on("getSceneControlButtons", (controls) => {
  const tokenTools = controls.tokens?.tools;
  if (!tokenTools) return;

  tokenTools["ffg-sw-hud"] = {
    name: "ffg-sw-hud",
    title: game.i18n.localize("ffg-sw-hud.controls.toggle"),
    icon: "fas fa-heart-pulse",
    button: true,
    onChange: () => {
      const token = canvas.tokens.controlled[0];
      if (token) {
        hudPanel.setToken(token);
      } else {
        ui.notifications.warn(game.i18n.localize("ffg-sw-hud.warn.no-token"));
      }
    }
  };
});
