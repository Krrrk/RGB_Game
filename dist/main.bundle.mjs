const a = PIXI.Texture.from("../assets/images/the_knight/Idle (1).png"), n = { x: 0, y: 0 }, i = new PIXI.Sprite(a);
function s(t) {
  t.stage.addChild(i), i.width = 200, i.height = 200, i.position.set(t.screen.width / 2, t.screen.height / 2), i.anchor.set(0.5, 0.5), i.interactive = !0, i.buttonmode = !0, i.on("pointerdown", function() {
    i.scale.x += 0.1, i.scale.y += 0.1;
  }), document.addEventListener("keydown", function(e) {
    (e.key === "ArrowRight" || e.key === "d") && (n.x += 8), (e.key === "ArrowLeft" || e.key === "a") && (n.x -= 8), (e.key === "ArrowUp" || e.key === "w") && (n.y -= 8), (e.key === "ArrowDown" || e.key === "s") && (n.y += 8);
  }), document.addEventListener("keyup", function(e) {
    (e.key === "ArrowRight" || e.key === "d" || e.key === "ArrowLeft" || e.key === "a") && (n.x = 0), (e.key === "ArrowUp" || e.key === "w" || e.key === "ArrowDown" || e.key === "s") && (n.y = 0);
  });
}
function h(t, e) {
  n.x > 5 && (n.x = 5), n.y > 5 && (n.y = 5), n.x < -5 && (n.x = -5), n.y < -5 && (n.y = -5), i.x += n.x * e, i.y += n.y * e, n.x < 0 && (i.scale.x = -Math.abs(i.scale.x)), n.x > 0 && (i.scale.x = Math.abs(i.scale.x));
}
function l(t) {
  const e = PIXI.Graphics, r = new e();
  r.beginFill(11154363).lineStyle(4, 16771584).drawRect(200, 200, 100, 120).endFill(), t.stage.addChild(r), t.renderer.backgroundColor = 16754458, new e().beginFill(16777215).drawRect(Math.random() * t.screen.width, Math.random() * t.screen.height, 10, 10).endFill();
}
function w(t, e) {
  const r = PIXI.Graphics, o = new r();
  o.beginFill(16777215).drawRect(Math.random() * t.screen.width, Math.random() * t.screen.height, 10, 10).endFill(), t.stage.addChild(o), setTimeout(() => {
    y(t, o, 1e3);
  }, 1e3);
}
function y(t, e, r) {
  const o = 60 / r;
  t.ticker.add(d);
  function d() {
    e.alpha -= o, e.alpha <= 0 && (e.alpha = 0, t.stage.removeChild(e), t.ticker.remove(d));
  }
}
function f(t) {
  t.renderer.resize(window.innerWidth, window.innerHeight), t.renderer.view.style.position = "absolute", document.body.appendChild(t.view), new PIXI.Container();
}
function u(t) {
  t.ticker.add((e) => {
    w(t), h(t, e);
  });
}
const k = PIXI.Application, c = new k({
  width: 1920,
  height: 1080,
  transparent: !1,
  antialias: !0
});
f(c);
l(c);
s(c);
u(c);
