module.exports = {
    params: {
        designator: 'M',
        side: 'F',
        gate: undefined,
        source: undefined,
        drain: undefined,
    },
    body: (p) => `
      (module "SOT-23-3" (layer "${p.side}.Cu")
        ${p.at}

        (fp_text reference "${p.ref}" (at 0 -2.4 ${p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer "${p.side}.SilkS") hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start 0 -1.56) (end -1.8 -1.56)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 0 -1.56) (end 0.8 -1.56)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 0 1.56) (end -0.8 1.56)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 0 1.56) (end 0.8 1.56)
          (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))

        (pad "1" smd roundrect (at -1.1375 -0.95 ${p.rot}) (size 1.325 0.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.gate.str})
        (pad "2" smd roundrect (at -1.1375 0.95 ${p.rot}) (size 1.325 0.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.source.str})
        (pad "3" smd roundrect (at 1.1375 0 ${p.rot}) (size 1.325 0.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.drain.str})
      )`,
}
