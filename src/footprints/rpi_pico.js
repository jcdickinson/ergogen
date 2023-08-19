module.exports = {
    params: {
        designator: 'MCU',

        GND: {type: 'net', value: 'GND'},
        AGND: {type: 'net', value: 'AGND'},
        VBUS: {type: 'net', value: 'VBUS'},
        VSYS: {type: 'net', value: 'VSYS'},
        V3_EN: {type: 'net', value: 'V3_EN'},
        V3: {type: 'net', value: 'V3'},
        RUN: {type: 'net', value: 'RUN'},
        ADC_VREF: {type: 'net', value: 'ADC_VREF'},

        GP0: {type: 'net', value: 'GP0'},
        GP1: {type: 'net', value: 'GP1'},
        GP2: {type: 'net', value: 'GP2'},
        GP3: {type: 'net', value: 'GP3'},
        GP4: {type: 'net', value: 'GP4'},
        GP5: {type: 'net', value: 'GP5'},
        GP6: {type: 'net', value: 'GP6'},
        GP7: {type: 'net', value: 'GP7'},
        GP8: {type: 'net', value: 'GP8'},
        GP9: {type: 'net', value: 'GP9'},

        GP10: {type: 'net', value: 'GP10'},
        GP11: {type: 'net', value: 'GP11'},
        GP12: {type: 'net', value: 'GP12'},
        GP13: {type: 'net', value: 'GP13'},
        GP14: {type: 'net', value: 'GP14'},
        // GP15: {type: 'net', value: 'GP15'}, // Private Use
        GP16: {type: 'net', value: 'GP16'},
        GP17: {type: 'net', value: 'GP17'},
        GP18: {type: 'net', value: 'GP18'},
        GP19: {type: 'net', value: 'GP19'},

        GP20: {type: 'net', value: 'GP20'},
        GP21: {type: 'net', value: 'GP21'},
        GP22: {type: 'net', value: 'GP22'},
        GP23: {type: 'net', value: 'GP23'},
        GP24: {type: 'net', value: 'GP24'},
        // GP25: {type: 'net', value: 'GP25'}, // Occupied by LED
        GP26: {type: 'net', value: 'GP26'},
        GP27: {type: 'net', value: 'GP27'},
        GP28: {type: 'net', value: 'GP28'},
    },
    body: (p) => `
    (footprint "RPi_Pico_SMD_TH" (layer "F.Cu") (tedit 6224DF39)
      ${p.at}
      (fp_text reference "${p.ref}" (at 0 0 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "" (at 0 0 ${p.rot}) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      (fp_line (start 10.5 4.9) (end 10.5 5.3) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 10) (end 10.5 10.4) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -3.7 25.5) (end -10.5 25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -0.2) (end 10.5 0.2) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 22.7) (end 10.5 23.1) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -7.493 -22.833) (end -7.493 -25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 20.1) (end -10.5 20.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 22.7) (end -10.5 23.1) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -15.4) (end -10.5 -15) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (layer "F.SilkS") (width 0.12) ) (fp_line (start 10.5 25.5) (end 3.7 25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -15.4) (end 10.5 -15) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 7.4) (end -10.5 7.8) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -22.833) (end -7.493 -22.833) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 4.9) (end -10.5 5.3) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -1.5 25.5) (end -1.1 25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 15.1) (end -10.5 15.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 1.1 25.5) (end 1.5 25.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 10) (end -10.5 10.4) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 2.3) (end 10.5 2.7) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -10.4) (end -10.5 -10) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -0.2) (end -10.5 0.2) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 17.6) (end -10.5 18) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 12.5) (end -10.5 12.9) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 7.4) (end 10.5 7.8) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -10.4) (end 10.5 -10) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 17.6) (end 10.5 18) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 20.1) (end 10.5 20.5) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 12.5) (end 10.5 12.9) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -18) (end 10.5 -17.6) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 2.3) (end -10.5 2.7) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (layer "F.SilkS") (width 0.12) )
      (fp_line (start -10.5 -18) (end -10.5 -17.6) (layer "F.SilkS") (width 0.12) )
      (fp_line (start 10.5 15.1) (end 10.5 15.5) (layer "F.SilkS") (width 0.12) )

      (pad "1" thru_hole oval (at -8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP0.str})
      (pad "1" smd rect (at -8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP0.str})
      (pad "2" thru_hole oval (at -8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP1.str})
      (pad "2" smd rect (at -8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP1.str})
      (pad "3" smd rect (at -8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "3" thru_hole rect (at -8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "4" thru_hole oval (at -8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP2.str})
      (pad "4" smd rect (at -8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP2.str})
      (pad "5" thru_hole oval (at -8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP3.str})
      (pad "5" smd rect (at -8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP3.str})
      (pad "6" thru_hole oval (at -8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP4.str})
      (pad "6" smd rect (at -8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP4.str})
      (pad "7" smd rect (at -8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP5.str})
      (pad "7" thru_hole oval (at -8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP5.str})
      (pad "8" thru_hole rect (at -8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "8" smd rect (at -8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "9" smd rect (at -8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP6.str})
      (pad "9" thru_hole oval (at -8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP6.str})
      (pad "10" thru_hole oval (at -8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP7.str})
      (pad "10" smd rect (at -8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP7.str})
      (pad "11" smd rect (at -8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP8.str})
      (pad "11" thru_hole oval (at -8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP8.str})
      (pad "12" thru_hole oval (at -8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP9.str})
      (pad "12" smd rect (at -8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP9.str})
      (pad "13" thru_hole rect (at -8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "13" smd rect (at -8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "14" smd rect (at -8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP10.str})
      (pad "14" thru_hole oval (at -8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP10.str})
      (pad "15" thru_hole oval (at -8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP11.str})
      (pad "15" smd rect (at -8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP11.str})
      (pad "16" smd rect (at -8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP12.str})
      (pad "16" thru_hole oval (at -8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP12.str})
      (pad "17" smd rect (at -8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP13.str})
      (pad "17" thru_hole oval (at -8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP13.str})
      (pad "18" smd rect (at -8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "18" thru_hole rect (at -8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "19" thru_hole oval (at -8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP14.str})
      (pad "19" smd rect (at -8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP14.str})
      (pad "" smd rect (at -8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${'' /* 20/GP15: private use */})
      (pad "" thru_hole oval (at -8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${'' /* 20/GP15: private use */ })
      (pad "21" smd rect (at 8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP16.str})
      (pad "21" thru_hole oval (at 8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP16.str})
      (pad "22" smd rect (at 8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP17.str})
      (pad "22" thru_hole oval (at 8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP17.str})
      (pad "23" smd rect (at 8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "23" thru_hole rect (at 8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "24" thru_hole oval (at 8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP18.str})
      (pad "24" smd rect (at 8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP18.str})
      (pad "25" smd rect (at 8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP19.str})
      (pad "25" thru_hole oval (at 8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP19.str})
      (pad "26" smd rect (at 8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP20.str})
      (pad "26" thru_hole oval (at 8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP20.str})
      (pad "27" thru_hole oval (at 8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP21.str})
      (pad "27" smd rect (at 8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP21.str})
      (pad "28" thru_hole rect (at 8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "28" smd rect (at 8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "29" thru_hole oval (at 8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP22.str})
      (pad "29" smd rect (at 8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP22.str})
      (pad "30" smd rect (at 8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.RUN.str})
      (pad "30" thru_hole oval (at 8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.RUN.str})
      (pad "31" thru_hole oval (at 8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP26.str})
      (pad "31" smd rect (at 8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP26.str})
      (pad "32" thru_hole oval (at 8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP27.str})
      (pad "32" smd rect (at 8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP27.str})
      (pad "33" smd rect (at 8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.AGND.str})
      (pad "33" thru_hole rect (at 8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.AGND.str})
      (pad "34" smd rect (at 8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GP28.str})
      (pad "34" thru_hole oval (at 8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP28.str})
      (pad "35" smd rect (at 8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.ADC_VREF.str})
      (pad "35" thru_hole oval (at 8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.ADC_VREF.str})
      (pad "36" thru_hole oval (at 8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3.str})
      (pad "36" smd rect (at 8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.V3.str})
      (pad "37" smd rect (at 8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.V3_EN.str})
      (pad "37" thru_hole oval (at 8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3_EN.str})
      (pad "38" smd rect (at 8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.GND.str})
      (pad "38" thru_hole rect (at 8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "39" smd rect (at 8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.VSYS.str})
      (pad "39" thru_hole oval (at 8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VSYS.str})
      (pad "40" thru_hole oval (at 8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VBUS.str})
      (pad "40" smd rect (at 8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${p.VBUS.str})
    )`,
}
