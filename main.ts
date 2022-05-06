function OdaberiNajboljiBroj () {
    while (Biram_brojeve == 1) {
        if (input.buttonIsPressed(Button.A)) {
            Malisan_NE_MIJENJATI_OVAJ_NAZIV += -1
            basic.showNumber(Malisan_NE_MIJENJATI_OVAJ_NAZIV)
        }
        if (input.isGesture(Gesture.Shake)) {
            Umoran_sam.push(Malisan_NE_MIJENJATI_OVAJ_NAZIV)
            Biram_brojeve = 0
        }
        if (input.buttonIsPressed(Button.B)) {
            Malisan_NE_MIJENJATI_OVAJ_NAZIV += 1
            basic.showNumber(Malisan_NE_MIJENJATI_OVAJ_NAZIV)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    Malisan_NE_MIJENJATI_OVAJ_NAZIV = 0
    Biram_brojeve = 1
    OdaberiNajboljiBroj()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    KOLICINA_BROJEVA = Umoran_sam.length
    Nemam_ideja_za_redosljed = 0
    for (let index = 0; index < KOLICINA_BROJEVA; index++) {
        UKUPNO += Umoran_sam[Nemam_ideja_za_redosljed]
        Nemam_ideja_za_redosljed += 1
    }
    Umoran_sam.push(UKUPNO)
    KOLICINA_BROJEVA = Umoran_sam.length - 1
    basic.showNumber(Umoran_sam[KOLICINA_BROJEVA])
})
let UKUPNO = 0
let Nemam_ideja_za_redosljed = 0
let KOLICINA_BROJEVA = 0
let Malisan_NE_MIJENJATI_OVAJ_NAZIV = 0
let Umoran_sam: number[] = []
let Biram_brojeve = 0
Biram_brojeve = 0
Umoran_sam = []
