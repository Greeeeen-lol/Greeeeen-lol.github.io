# Known Bugs

## Plaza: hat outline not rendering

**Where:** `wii-u-menu/src/components/WelcomeScreen.tsx` — `buildOutline()` (Mii selection outline, color `#12e9e4`).

**Symptom:** When a Mii is clicked, the `#12e9e4` selection outline renders on the body, worn clothing, and head/face — but **not on 3D hats**.

**What we know:**
- Hats are separate models loaded from `public/assets/models/hat_models_bundle.zip` (`hat_01`–`hat_26`), added by the engine as a `HatScene` group **child of the Mii head** (`m.head`).
- The hat mesh passes the outline filter: `visible: true`, `shown: true`, `hasNormal: true`, `verts: 238`, `material.side: 2` (DoubleSide). So the backface-hull clone **is** built — it just doesn't show.
- Outline works by cloning each mesh, inflating along normals (`transformed += normalize(normal) * uThick`), drawing back faces in the outline color.
- `HatScene` has a different local→world scale than the FFL face meshes, so a constant local `uThick` collapses at the hat's scale. Attempted fix: rescale the hat hull's thickness to match the face's **world** rim (divide `uThick` by the mesh's world scale). **Did not fix it** — hat hull still invisible.

**Next suspects (untested):**
- Hat geometry normals may point inward / be unreliable → inflated hull lands inside the hat. Try `geometry.computeVertexNormals()` on a cloned hat geometry, or inflate along a center-out direction instead of `normal`.
- Hat material `side: DoubleSide` vs hull `BackSide` interaction; try `FrontSide` hull scaled up about the mesh center.
- Depth/render-order: hat may overdraw the hull. Try `depthTest: false` + lower `renderOrder` on hat hulls only.

**Severity:** low (cosmetic; body/head outline works).
