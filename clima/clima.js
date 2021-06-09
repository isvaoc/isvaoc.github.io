window.onload = function() {
    const meses = { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre' }
    const mes_lis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const D1 = { 1: "(w2)(w),", 2: "(w2),", 3: "(w2)(x'),", 4: "(x')(w2),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D2 = { 1: "(w1)(w),", 2: "(w1),", 3: "(w1)(x'),", 4: "(x')(w1),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D3 = { 1: "(w0)(w),", 2: "(w0),", 3: "(w0)(x'),", 4: "(x')(w0),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D4 = { 1: "w2(w),", 2: "w2,", 3: "w2(x'),", 4: "x'(w2),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D5 = { 1: "w1(w),", 2: "w1,", 3: "w1(x'),", 4: "x'(w1),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D6 = { 1: "w0(w),", 2: "w0,", 3: "w0(x'),", 4: "x'(w0),", 5: "x',", 6: "s(x'),", 7: "s," }
    const D7 = { 1: "w(w),", 2: "w,", 3: "w(x'),", 4: "x'(w),", 5: "x',", 6: "s(x'),", 7: "s," }
    const dic_clima = { "A": "calido", "A(C)": "semicalido", "(A)Ca": "semicalido a templado con verano calido", "(A)Cb": "semicalido a templado con verano fresco largo", "BW": "muy arido", "BS1": "semiarido", "BS0": "arido", "Ca": "templado con verano calido", "Cb": "templado con verano fresco largo", "Cb'": "semifrio con verano fresco larco", "Cc": "semifrio con verano fresco corto", "E(F)": "muy frio", "EF": "muy frio", "E(T)C": "frio (mes frio sobre cero)", "E(T)": "frio (mes frio bajo cero)", "(h')": "calido (t. mes frio sobre 18*C)", "(h')h": "calido (t. mes frio bajo 18*C)", "h'(h)": "semicalido (t. mes frio sobre 18*C)", "h": "semicalido (t. mes frio bajo 18*C)", "k": "templado con verano calido", "k'": "templado con verano fresco", "k''": "semifrio", "w": "con lluvias en verano (lluvia invernal menor al 5%)", "f": "con lluvias todo el año (lluvia invernal mayor al 10%)", "(fm)": "lluvia invernal hasta 18%", "(f)": "humedo con lluvias todo el año (lluvia invernal supera 18%)", "f(m)": "humedo con lluvias todo el año (lluvia invernal hasta 18%)", "m(w)": "humedo con lluvias en verano (lluvia invernal menor al 5%)", "m": "humedo con lluvias en verano (lluvia invernal entre 5 y 10%)", "m(f)": "humedo con lluvias en verano (lluvia invernal supera el 10%)", "(m)(w)": "humedo con lluvias en verano (lluvia invernal menor al 5%)", "(m)(f)": "humedo con lluvias en verano (lluvia invernal supera el 10%)", "H": "frio de altura (+3,000 m.s.n.m)", "(i)": "temperatura anual isotermal", "(i')": "temperatura anual con poca oscilacion", "(e)": "temperatura anual extremosa", "(e')": "temperatura anual muy extremosa", "g": "marcha de temperatua anual tipo Ganges", "w''": "presenta canicula", "(w2)(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "(w2)": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "(w2)(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "(x')(w2)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "x'": "con lluvias todo el año (lluvia invernal supera el 18%)", "s(x')": "con lluvias en invierno (lluvia invernal menor al 36%)", "s": "con lluvias en invierno (lluvia invernal mayor al 36%)", "(w1)(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "(w1)": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "(w1)(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "(x')(w1)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "(w0)(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "(w0)": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "(w0)(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "(x')(w0)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "w2(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "w2": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "w2(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "x'(w2)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "w1(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "w1": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "w1(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "x'(w1)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "w0(w)": "subhumedo con lluvias en verano (lluvia invernal menor al 5% )", "w0": "subhumedo con lluvias en verano (lluvia invernal entre 5 y 10% )", "w0(x')": "subhumedo con lluvias en verano (lluvia invernal supera el 10% )", "x'(w0)": "subhumedo con lluvias todo el año (lluvia invernal menor al 18%)", "w(w)": "con lluvias en verano (lluvia invernal menor al 5% )", "w(x')": "con lluvias en verano (lluvia invernal supera el 10% )", "x'(w)": "con lluvias todo el año (lluvia invernal menor al 18%)" }


    let nombre
    let lat
    let long
    let altura
    let tEnero
    let tFebrero
    let tMarzo
    let tAbril
    let tMayo
    let tJunio
    let tJulio
    let tAgosto
    let tSeptiembre
    let tOctubre
    let tNoviembre
    let tDiciembre
    let temp_mes_lis
    let temp_mes_dict
    let pEnero
    let pFebrero
    let pMarzo
    let pAbril
    let pMayo
    let pJunio
    let pJulio
    let pAgosto
    let pSeptiembre
    let pOctubre
    let pNoviembre
    let pDiciembre
    let pres_mes_lis
    let pres_mes_dict
    let TC1
    let TC2
    let PL1;
    let PL2;
    let TF1
    let TF2
    let PS1
    let PS2
    let PA
    let TA
    let PT
    let PPI
    let PPV
    let OS
    let MD;
    let RL
    let RH
    let RS
    let GF
    let H
    let X1
    let mes_calido
    let mes_frio
    let mes_humedo
    let mes_seco
    let salida = "";
    let texto = "";

    function leerElementos() {
        nombre = document.getElementById("nombre").value;
        altura = parseFloat(document.getElementById("altura").value);
        lat = document.getElementById("latitud").value;
        long = document.getElementById("longitud").value;
        /* Obteniendo temperaturas y haciendo calculos */
        tEnero = parseFloat(document.getElementById("tEnero").value);
        tFebrero = parseFloat(document.getElementById("tFebrero").value);
        tMarzo = parseFloat(document.getElementById("tMarzo").value);
        tAbril = parseFloat(document.getElementById("tAbril").value);
        tMayo = parseFloat(document.getElementById("tMayo").value);
        tJunio = parseFloat(document.getElementById("tJunio").value);
        tJulio = parseFloat(document.getElementById("tJulio").value);
        tAgosto = parseFloat(document.getElementById("tAgosto").value);
        tSeptiembre = parseFloat(document.getElementById("tSeptiembre").value);
        tOctubre = parseFloat(document.getElementById("tOctubre").value);
        tNoviembre = parseFloat(document.getElementById("tNoviembre").value);
        tDiciembre = parseFloat(document.getElementById("tDiciembre").value);

        temp_mes_lis = [tEnero, tFebrero, tMarzo, tAbril, tMayo, tJunio, tJulio, tAgosto, tSeptiembre, tOctubre, tNoviembre, tDiciembre];

        temp_mes_dict = [
            { id: "Enero", temp: tEnero },
            { id: "Febrero", temp: tFebrero },
            { id: "Marzo", temp: tMarzo },
            { id: "Abril", temp: tAbril },
            { id: "Mayo", temp: tMayo },
            { id: "Junio", temp: tJunio },
            { id: "Julio", temp: tJulio },
            { id: "Agosto", temp: tAgosto },
            { id: "Septiembre", temp: tSeptiembre },
            { id: "Octubre", temp: tOctubre },
            { id: "Noviembre", temp: tNoviembre },
            { id: "Diciembre", temp: tDiciembre }
        ]

        /* Obteniendo valores de precipitación y calculando maximo y minimo */
        pEnero = parseFloat(document.getElementById("pEnero").value);
        pFebrero = parseFloat(document.getElementById("pFebrero").value);
        pMarzo = parseFloat(document.getElementById("pMarzo").value);
        pAbril = parseFloat(document.getElementById("pAbril").value);
        pMayo = parseFloat(document.getElementById("pMayo").value);
        pJunio = parseFloat(document.getElementById("pJunio").value);
        pJulio = parseFloat(document.getElementById("pJulio").value);
        pAgosto = parseFloat(document.getElementById("pAgosto").value);
        pSeptiembre = parseFloat(document.getElementById("pSeptiembre").value);
        pOctubre = parseFloat(document.getElementById("pOctubre").value);
        pNoviembre = parseFloat(document.getElementById("pNoviembre").value);
        pDiciembre = parseFloat(document.getElementById("pDiciembre").value);

        pres_mes_lis = [pEnero, pFebrero, pMarzo, pAbril, pMayo, pJunio, pJulio, pAgosto, pSeptiembre, pOctubre, pNoviembre, pDiciembre];

        pres_mes_dict = [
            { id: "Enero", pres: pEnero },
            { id: "Febrero", pres: pFebrero },
            { id: "Marzo", pres: pMarzo },
            { id: "Abril", pres: pAbril },
            { id: "Mayo", pres: pMayo },
            { id: "Junio", pres: pJunio },
            { id: "Julio", pres: pJulio },
            { id: "Agosto", pres: pAgosto },
            { id: "Septiembre", pres: pSeptiembre },
            { id: "Octubre", pres: pOctubre },
            { id: "Noviembre", pres: pNoviembre },
            { id: "Diciembre", pres: pDiciembre }
        ]

        /* 
            haciendo cálculos
        */

        TC1 = Math.max(...temp_mes_lis);
        let tempMax = Math.max.apply(null, temp_mes_dict.map(function(a) { return a.temp; }));
        let tmaxobj = temp_mes_dict.find(o => o.temp === tempMax);
        mes_calido = tmaxobj.id;
        TC2 = 1 + temp_mes_lis.indexOf(TC1)

        TF1 = Math.min(...temp_mes_lis);
        let tempMin = Math.min.apply(null, temp_mes_dict.map(function(a) { return a.temp; }));
        let tminobj = temp_mes_dict.find(o => o.temp === tempMin);
        mes_frio = tminobj.id;
        TF2 = 1 + temp_mes_lis.indexOf(TF1)

        PL1 = Math.max(...pres_mes_lis);
        let presMax = Math.max.apply(null, pres_mes_dict.map(function(a) { return a.pres; }));
        let pmaxobj = pres_mes_dict.find(o => o.pres === presMax);
        mes_humedo = pmaxobj.id;
        PL2 = 1 + pres_mes_lis.indexOf(PL1)

        PS1 = Math.min(...pres_mes_lis);
        let presMin = Math.min.apply(null, pres_mes_dict.map(function(a) { return a.pres; }));
        let pminobj = pres_mes_dict.find(o => o.pres === presMin);
        mes_seco = pminobj.id;
        PS2 = 1 + pres_mes_lis.indexOf(PS1)

        PA = pres_mes_lis.reduce((a, b) => a + b);
        PA = PA.toFixed(1)
        let tempan = temp_mes_lis.reduce((a, b) => a + b);
        TA = tempan / 12;
        TA = TA.toFixed(1)
        PT = PA / TA;
        PT = PT.toFixed(1)
        PPI = ((pres_mes_lis[0] + pres_mes_lis[1] + pres_mes_lis[2]) / PA) * (100.0);
        PPI = PPI.toFixed(1)
        PPV = ((pres_mes_lis[5] + pres_mes_lis[6] + pres_mes_lis[7] + pres_mes_lis[8]) / PA) * (100.0);
        PPV = PPV.toFixed(1)
        OS = TC1 - TF1;
        OS = OS.toFixed(1);

        MD = 0;
        for (let i of temp_mes_lis) {
            if (i > 10) {
                MD += 1;
            }
        }

        X1 = (60 - ((PA - 1000) / 31)) //no impreso


        // Encontrando el valor para RL
        if (PL2 >= 5 && PL2 <= 10) {
            if (PL1 >= (PS1 * 10)) {
                RL = 1
            } else {
                RL = 2
            }
        } else if (PL1 / (PS1 + 1)) {
            RL = 3
        } else {
            RL = 2
        }

        // Encontrando valores cuando RL=1 
        if (RL == 1) {
            if (PPI <= 5) {
                RH = (2 * TA) + 28
                RS = RH / 2
                GF = 1
            } else if (PPI < 10.2) {
                RH = (2 * TA) + 28
                RS = RH / 2
                GF = 2
            } else {
                RH = (2 * TA) + 21
                RS = RH / 2
                GF = 3
            }
        }

        // Encontrando valores cuando RL=2
        if (RL == 2) {
            if (PPI < 18) {
                RH = (2 * TA) + 14
                RS = RH / 2
                GF = 4
            } else {
                RH = (2 * TA) + 14
                RS = RH / 2
                GF = 5
            }
        }

        // Encontrando valores cuando RL=3
        if (RL == 3) {
            if (PPI < 36) {
                RH = (2 * TA)
                RS = RH / 2
                GF = 6
            } else {
                RH = (2 * TA)
                RS = RH / 2
                GF = 7
            }
        }

        // Encontrando el valor de H
        if (RH < (PA / 10)) {
            H = 1
        } else {
            H = 0
        }

        texto = texto + modulo1A();

        if (texto.endsWith(',')) {
            texto = texto.substring(0, texto.length - 1)
        }
        let texto2 = texto.split(",").join("")

        let texto_lis = texto.split(",")

        let des = " "
        for (let j of texto_lis) {
            des = des + dic_clima[j] + ", "
        }
        if (ww == 1) {
            des = des.substring(0, des.length - 2)
            des = des + " en " + mescan + "  "
        }
        des = des.substring(0, des.length - 2) + "."


        document.getElementById("estacion").innerText = nombre;
        document.getElementById("clima").innerText = texto2;
        document.getElementById("lat").innerText = lat;
        document.getElementById("long").innerText = long;
        document.getElementById("detalle").innerText = "[" + texto_lis + "]";
        document.getElementById("desc").innerText = "Clima " + des;
        document.getElementById("lluvia").innerText = mes_humedo;
        document.getElementById("pmax").innerText = PL1;
        document.getElementById("sequia").innerText = mes_seco;
        document.getElementById("pmin").innerText = PS1;
        document.getElementById("calor").innerText = mes_calido;
        document.getElementById("tmax").innerText = TC1;
        document.getElementById("frio").innerText = mes_frio;
        document.getElementById("tmin").innerText = TF1;
        document.getElementById("prectot").innerText = PA;
        document.getElementById("tempp").innerText = TA;
        document.getElementById("ilang").innerText = PT;
        document.getElementById("ppinv").innerText = PPI;
        document.getElementById("ppver").innerText = PPV;
        document.getElementById("mtem10").innerText = MD;
        document.getElementById("oscan").innerText = OS;

        return false
    }


    document.getElementById("btn-ingresar").onclick = leerElementos;

    function limpiarElementos() {
        document.getElementById("nombre").value = "";
        document.getElementById("latitud").value = "";
        document.getElementById("longitud").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("tEnero").value = "";
        document.getElementById("tFebrero").value = "";
        document.getElementById("tMarzo").value = "";
        document.getElementById("tAbril").value = "";
        document.getElementById("tMayo").value = "";
        document.getElementById("tJunio").value = "";
        document.getElementById("tJulio").value = "";
        document.getElementById("tAgosto").value = "";
        document.getElementById("tSeptiembre").value = "";
        document.getElementById("tOctubre").value = "";
        document.getElementById("tNoviembre").value = "";
        document.getElementById("tDiciembre").value = "";
        document.getElementById("pEnero").value = "";
        document.getElementById("pFebrero").value = "";
        document.getElementById("pMarzo").value = "";
        document.getElementById("pAbril").value = "";
        document.getElementById("pMayo").value = "";
        document.getElementById("pJunio").value = "";
        document.getElementById("pJulio").value = "";
        document.getElementById("pAgosto").value = "";
        document.getElementById("pSeptiembre").value = "";
        document.getElementById("pOctubre").value = "";
        document.getElementById("pNoviembre").value = "";
        document.getElementById("pDiciembre").value = "";

        document.getElementById("estacion").innerText = "AAAAAA";
        document.getElementById("lat").innerText = "______";
        document.getElementById("long").innerText = "______";
        document.getElementById("clima").innerText = "--------";
        document.getElementById("detalle").innerText = "___________";
        document.getElementById("desc").innerText = "___________";
        document.getElementById("lluvia").innerText = "mes";
        document.getElementById("pmax").innerText = "0";
        document.getElementById("sequia").innerText = "mes";
        document.getElementById("pmin").innerText = "0";
        document.getElementById("calor").innerText = "mes";
        document.getElementById("tmax").innerText = "0";
        document.getElementById("frio").innerText = "mes";
        document.getElementById("tmin").innerText = "0";
        document.getElementById("prectot").innerText = "0";
        document.getElementById("tempp").innerText = "0";
        document.getElementById("ilang").innerText = "0";
        document.getElementById("ppinv").innerText = "0";
        document.getElementById("ppver").innerText = "0";
        document.getElementById("mtem10").innerText = "0";
        document.getElementById("oscan").innerText = "0";
    }

    document.getElementById("btn-vaciar").onclick = limpiarElementos;

    // Creando las funciones de los módulos

    /* Modulo 1A
       Determinación de los climas áridos (BW) y semisecos (BS), y de los fríos [E(F)] 
    */


    function modulo1A() {
        if (-2 < TA && TA < 5) {
            salida = modulo2()
        } else if (TC1 < 0) {
            salida = texto + "E(F)," + modulo10pre()
        } else if (H == 0) {
            if (RS > (PA / 10)) {
                salida = texto + "BW," + modulo1B()
            } else if (PT > 22.9) {
                salida = texto + "BS1," + modulo1B()
            } else {
                salida = texto + "BS0," + modulo1B()
            }
        } else {
            salida = modulo4A()
        }
        return salida
    }

    /* Modulo 1B
       Determinación de los subtipos para climas secos [B] 
    */

    function modulo1B() {
        if (TA > 22) {
            if (TF1 > 18) {
                salida = texto + "(h')," + modulo6()
            } else {
                salida = texto + "(h')h," + modulo6()
            }
        } else if (TA > 18) {
            if (TF1 > 10) {
                salida = texto + "h'(h)," + modulo6()
            } else {
                salida = texto + "h," + modulo6()
            }
        } else if (TA > 12) {
            if (TF1 > -3) {
                if (TC1 < 18) {
                    salida = texto + "k'," + modulo6()
                } else {
                    salida = texto + "k," + modulo6()
                }
            } else {
                salida = modulo3A()
            }
        } else {
            salida = texto + "k''," + modulo6()
        }
        return salida
    }

    /* Modulo 2
       Determinación y diferencia de los climas fríos [E] 
    */

    function modulo2() {
        if (TF1 > 0 && TC1 > 0 && TC1 < 6.5) {
            salida = texto + "E(T)C," + modulo10pre()
        } else {
            salida = texto + "E(T)," + modulo10pre()
        }
        return salida
    }

    /* Modulo 3A
       Determinación de los climas boreales [D] (no hay en México)
    */

    function modulo3A() {
        if (TF1 < -38) {
            salida = texto + "Dd," + modulo3B()
        } else if (TC1 > 22) {
            salida = texto + "Da," + modulo3B()
        } else if (MD < 4) {
            salida = texto + "Dc," + modulo3B()
        } else {
            salida = texto + "Db," + modulo3B()
        }
        return salida
    }

    /* Modulo 3B
       Asignacion de regimenes de lluvia [w] y [f]
    */

    function modulo3B() {
        if (RL == 1) {
            salida = texto + "w," + modulo5()
        } else {
            salida = texto + "f," + modulo5()
        }
        return salida
    }

    /* Modulo 4A
       Determinación de climas cálidos (tropicales) [A] y semicalidos [A(C)]
    */

    function modulo4A() {
        if (TF1 > 18) {
            if (TA > 22) {
                salida = texto + "A," + modulo8A()
            } else {
                salida = texto + "A(C)," + modulo8A()
            }
        } else {
            salida = modulo4B()
        }
        return salida
    }

    /* Modulo 4B
       Modulo de transito
    */

    function modulo4B() {
        if (TF1 > -3) {
            if (TC1 > 6.5) {
                salida = modulo4C()
            } else {
                salida = modulo2()
            }
        } else {
            salida = modulo3A()
        }
        return salida
    }

    /* Modulo 4C
       Determinación y diferencia de climas cálidos [A] y templados [C]
    */

    function modulo4C() {
        if (TA > 18) {
            if (TC1 > 22) {
                salida = texto + "(A)Ca," + modulo4D()
            } else {
                salida = texto + "(A)Cb," + modulo4D()
            }
        } else if (TA > 12) {
            if (TC1 > 22) {
                salida = texto + "Ca," + modulo4D()
            } else {
                salida = texto + "Cb," + modulo4D()
            }
        } else if (TA > 5) {
            if (MD < 4) {
                salida = texto + "Cc," + modulo4D()
            } else {
                salida = texto + "Cb'," + modulo4D()
            }
        } else {
            salida = texto + "EF," + modulo4D()
        }
        return salida
    }

    /* Modulo 4D
       Regimen de lluvias invernales en climas húmedos [A O C]
    */

    function modulo4D() {
        if (PS1 > 40) {
            if (PPI < 18) {
                salida = texto + "(fm)," + modulo5()
            } else {
                salida = texto + "(f)," + modulo5()
            }
        } else {
            salida = modulo9()
        }
        return salida
    }

    /* Modulo 5
       Nivel de oscilaciones en la temperatura
    */

    function modulo5() {
        if (OS <= 5) {
            salida = texto + "(i)," + modulo7()
        } else if (OS <= 7) {
            salida = texto + "(i')," + modulo7()
        } else if (OS <= 14) {
            salida = texto + "(e)," + modulo7()
        } else {
            salida = texto + "(e')," + modulo7()
        }
        return salida
    }

    /* Modulo 6
       Asignación de subtipos para climas secos [b]
    */

    function modulo6() {
        salida = texto + D7[GF] + modulo5()
        return salida
    }

    /* Modulo 7
       Marcha anual de temperatura [Ganges]
    */

    function modulo7() {
        if (TC2 <= 6) {
            salida = texto + "g," + modulo11()
        } else {
            salida = texto + modulo11()
        }
        return salida
    }

    /* Modulo 8A
       Determinación de tipos para climas calidos y templados [A o C]
    */

    function modulo8A() {
        if (PS1 > 60) {
            if (PPI < 18) {
                salida = texto + "f(m)," + modulo5()
            } else {
                salida = texto + "f," + modulo5()
            }
        }
        if (PS1 > X1) { // /31 no impreso
            if (PPI < 5) {
                salida = texto + "m(w)," + modulo5()
            } else if (PPI < 10.2) {
                salida = texto + "m," + modulo5()
            } else {
                salida = texto + "m(f)," + modulo5()
            }
        } else {
            salida = modulo8B()
        }
        return salida
    }

    /* Modulo 8B
       Determinación de subtipos para climas calidos y templados [A o C]
    */

    function modulo8B() {
        if (PT > 55.3) {
            salida = texto + D4[GF] + modulo5()
        } else if (PT > 43.2) {
            salida = texto + D5[GF] + modulo5()
        } else {
            salida = texto + D6[GF] + modulo5()
        }
        return salida
    }

    /* Modulo 9
       Determinación de tipos para climas calidos [A]
    */

    function modulo9() {
        if (PS1 > (-1) * ((PA - 1740) / 31)) { // (-1) puede ser 60-
            if (PPI < 5) {
                salida = texto + "(m)(w)," + modulo5()
            } else if (PPI < 10.2) {
                salida = texto + "m(f)," + modulo5()
            } else {
                salida = texto + "(m)(f)," + modulo5()
            }
        } else {
            salida = modulo10()
        }
        return salida
    }

    /* Modulo 10
       Determinación de subtipos para climas frios [E]
    */

    function modulo10() {
        if (PT > 55) {
            salida = texto + D1[GF] + modulo5()
        } else if (PT > 43.2) {
            salida = texto + D2[GF] + modulo5()
        } else {
            salida = texto + D3[GF] + modulo5()
        }
        return salida
    }

    /* Modulo 10 pre
       Estaciones arriba de 3000 msnm para climas frios [E]
    */

    function modulo10pre() {
        if (altura >= 4000) {
            salida = texto + "H," + modulo10()
        } else {
            salida = modulo10()
        }
        return salida
    }

    /* Modulo 11
       Determinación de la canicula
    */
    let mescan
    let ww

    function modulo11() {
        PreD = pres_mes_lis
        if (RL == 1 || RL == 2) {
            if (PreD[6] < (PreD[5])) {
                if (PreD[6] <= PreD[7]) {
                    salida = texto + "w''"
                    mescan = 'julio'
                    ww = 1
                } else if (PreD[6] <= PreD[8]) {
                    salida = texto + "w''"
                    mescan = 'julio'
                    ww = 1
                } else {
                    salida = texto
                }
            } else if (PreD[7] < (PreD[8])) {
                if (PreD[7] <= PreD[6]) {
                    salida = texto + "w''"
                    mescan = 'agosto'
                    ww = 1
                } else if (PreD[7] <= PreD[5]) {
                    salida = texto + "w''"
                    mescan = 'agosto'
                    ww = 1
                } else {
                    salida = texto
                }
            } else if (PreD[8] < (PreD[9])) {
                if (PreD[8] <= PreD[7]) {
                    salida = texto + "w''"
                    mescan = 'septiembre'
                    ww = 1
                } else if (PreD[8] <= PreD[6]) {
                    salida = texto + "w''"
                    mescan = 'septiembre'
                    ww = 1
                } else {
                    salida = texto
                }
            } else {
                salida = texto
            }
        } else {
            salida = texto
        }
        return salida
    }

}