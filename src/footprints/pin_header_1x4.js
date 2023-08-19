module.exports = {
    params: {
        GND: {type: 'net', value: 'GND'},
        P1: undefined,
        P2: undefined,
        P3: undefined,
    },
    body: (p) => `
      (footprint "PinHeader_1x04_P2.54mm_Vertical" (layer "F.Cu")
        ${p.at}
        (fp_text reference "${p.ref}" (at 0 -2.33 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -1.33 -1.33) (end 0 -1.33)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.33 0) (end -1.33 -1.33)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.33 1.27) (end -1.33 8.95)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.33 1.27) (end 1.33 1.27)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -1.33 8.95) (end 1.33 8.95)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 1.33 1.27) (end 1.33 8.95)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (pad "1" thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
        (pad "2" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
        (pad "3" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
        (pad "4" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
      )`,
}
