module.exports = {
    params: {
        designator: 'R',
        side: 'F',
        from: undefined,
        to: undefined,
    },
    body: (p) => `
      (module "R_0603_1608Metric" (layer "${p.side}.Cu")
        ${p.at}

        (fp_text reference "${p.ref}" (at 0 -1.43 ${p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start -0.237258 -0.5225) (end 0.237258 -0.5225)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start -0.237258 0.5225) (end 0.237258 0.5225)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))

        (pad "1" smd roundrect (at -0.825 0 ${p.rot}) (size 0.8 0.95) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.from.str})
        (pad "2" smd roundrect (at 0.825 0 ${p.rot}) (size 0.8 0.95) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.to.str})
      )`,
}
