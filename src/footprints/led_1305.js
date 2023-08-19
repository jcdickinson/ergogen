module.exports = {
    params: {
        designator: 'LED',
        from: undefined,
        to: undefined,
    },
    body: (p) => `
      (module "LED_1305_3412Metric" (layer "F.Cu")
        ${p.at}

        (fp_text reference "${p.ref}" (at 0 -2.5 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.1))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (pad "" np_thru_hole circle (at 0 0) (size 2.4 2.4) (drill 2.4) (layers "F&B.Cu" "*.Mask"))
        (pad "1" smd rect (at -1.86 0 ${p.rot}) (size 1.08 1.25) (drill (offset 0.3 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
        (pad "2" smd rect (at 1.86 0 ${p.rot}) (size 1.08 1.25) (drill (offset -0.3 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})
      )`,
}
