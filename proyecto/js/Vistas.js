var boton_index = document.getElementById("btnIndex");
var boton_login = document.getElementById("btnLog");
var boton_registrar = document.getElementById("btnReg");
var contenedor = document.getElementById("contenedor");
var htmlRegistro = "";
var htmlLogin = "";
var htmlIndex = "";
var htmlVista = "";
var htmlPrimera_sesion = "";


// Registrarse
htmlRegistro += "<h2>Registro</h2>";
htmlRegistro += "       <form id='frmregistro' class='cont'>";
htmlRegistro += "           <label class='lbl' id='lbl1'>Nombres: </label>";
htmlRegistro += "           <input type='text' id='nombres' class='txt' autocomplete='off'>";
htmlRegistro += "           <label class='lbl' id='lbl2'>Apellidos: </label>";
htmlRegistro += "           <input type='text' id='apellidos' class='txt' autocomplete='off'>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl3'>e-Mail: </label>";
htmlRegistro += "           <input type='email' id='email' class='txt' autocomplete='off'>";
htmlRegistro += "           <label class='lbl' id='lbl4'>Contraseña: </label>";
htmlRegistro += "           <input type='password' id='pass' class='txt' autocomplete='off'>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl5'>Repetir contraseña: </label>";
htmlRegistro += "           <input type='password' id='pass2' class='txt' autocomplete='off'>";
htmlRegistro += "           <br>";
htmlRegistro += "           <br>";
htmlRegistro += "           <select id='departamento'>";
htmlRegistro += "               <option value='default'>Departamento</option>";
htmlRegistro += "               <option value='ahuachapan'>Ahuachapán</option>";
htmlRegistro += "               <option value='cabanas'>Cabañas</option>";
htmlRegistro += "               <option value='chalatenango'>Chalatenango</option>";
htmlRegistro += "               <option value='cuscatlan'>Cuscatlán</option>";
htmlRegistro += "               <option value='llibertad'>La Libertad</option>";
htmlRegistro += "               <option value='lpaz'>La paz</option>";
htmlRegistro += "               <option value='lunion'>La Unión</option>";
htmlRegistro += "               <option value='morazan'>Morazan</option>";
htmlRegistro += "               <option value='smiguel'>San Miguel</option>";
htmlRegistro += "               <option value='ssalvador'>San Salvador</option>";
htmlRegistro += "               <option value='svicente'>San Vicente</option>";
htmlRegistro += "               <option value='sana'>Santa Ana</option>";
htmlRegistro += "               <option value='sonsonate'>Sonsonate</option>";
htmlRegistro += "               <option value='usulutan'>Usulutan</option>";
htmlRegistro += "           </select>";
htmlRegistro += "           <select id='municipio'>";
htmlRegistro += "               <option value='default'>Municipio</option>";
htmlRegistro += "           </select>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl6'>Dirección: </label>";
htmlRegistro += "           <input type='text' id='direccion' class='txt' autocomplete='off'>";
htmlRegistro += "           <br><br><br>";
htmlRegistro += "           <select name='' id='pregunta'>";
htmlRegistro += "               <option value='0'>¿Cuál es el nombre de tu madre?</option>";
htmlRegistro += "               <option value='1'>¿Cuál fue el nombre de tu primera mascota?</option>";
htmlRegistro += "               <option value='2'>¿Cuál fue el nombre de tu mejor amigo de la infancia?</option>";
htmlRegistro += "               <option value='3'>¿Cuál es tu comida favorita?</option>";
htmlRegistro += "               <option value='4'>¿Cuál es tu deporte favorito?</option>";
htmlRegistro += "           </select>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl7'>Respuesta: </label>";
htmlRegistro += "           <input type='text' id='respuesta' class='txt' autocomplete='off'>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl8'>Dui: </label>";
htmlRegistro += "           <input type='text' id='dui' class='txt' autocomplete='off'>";
htmlRegistro += "           <label class='lbl' id='lbl9'>Nit: </label>";
htmlRegistro += "           <input type='text' id='nit' class='txt' autocomplete='off'>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl10'>Número celular: </label>";
htmlRegistro += "           <input type='text' id='celular' class='txt' autocomplete='off'>";
htmlRegistro += "           <br><br><br>";
htmlRegistro += "           <select name='mes' id='mes'>";
htmlRegistro += "               <option value='default'>Mes de nacimiento</option>";
htmlRegistro += "               <option value='enero'>Enero</option>";
htmlRegistro += "               <option value='febrero'>Febrero</option>";
htmlRegistro += "               <option value='marzo'>Marzo</option>";
htmlRegistro += "               <option value='abril'>Abril</option>";
htmlRegistro += "               <option value='mayo'>Mayo</option>";
htmlRegistro += "               <option value='junio'>Junio</option>";
htmlRegistro += "               <option value='julio'>Julio</option>";
htmlRegistro += "               <option value='agosto'>Agosto</option>";
htmlRegistro += "               <option value='septiembre'>Septiembre</option>";
htmlRegistro += "               <option value='octubre'>Octubre</option>";
htmlRegistro += "               <option value='noviembre'>Noviembre</option>";
htmlRegistro += "               <option value='diciembre'>Diciembre</option>";
htmlRegistro += "           </select>";
htmlRegistro += "           <select name='dia' id='dia'>";
htmlRegistro += "               <option value='default'>Día de nacimiento</option>";
htmlRegistro += "           </select>";
htmlRegistro += "           <br>";
htmlRegistro += "           <label class='lbl' id='lbl11'>Año de nacimiento: </label>";
htmlRegistro += "           <input type='text' id='a_nacimiento' class='txt' autocomplete='off' maxlength='4'>";
htmlRegistro += "           <input type='button' value='Enviar datos' id='enviar'>";
htmlRegistro += "       </form>";






// html Vista
// htmlVista +='<div class="bar-menu" id="btnMenu">';
// htmlVista +='<a  class="btnMenu">Menú <i class="fa fa-bars fa-2x btn-bar"></i></a>';
// htmlVista +='</div>';
htmlVista +='<div class="cont-Father">';
htmlVista +='    <div class="barra-lateral">';
htmlVista +='            <div class="cabera-menu">';
htmlVista +='                <img src="img/logo.png" class="logo">';
htmlVista +='            </div>';
htmlVista +='            <ul class="VistaMenu" id="VistaUl">';
htmlVista +='                <li class="Primer"><a>Cuentas</a>';
htmlVista +='                    <ul class="sub">';
htmlVista +='                        <li class="vistas"><a href="#">Efectivo</a></li>';
htmlVista +='                        <li class="vistas"><a href="#">Ver Cuentas</a></li>';
htmlVista +='                        <li class="vistas"><a href="#">Agregar Cuenta</a></li>';
htmlVista +='                        <li class="vistas"><a href="#">Ver Tarjetas</a></li>';
htmlVista +='                        <li class="vistas"><a href="#">Agregar Tarjeta de Credito</a></li>';
htmlVista +='                    </ul>';
htmlVista +='                </li>';
htmlVista +='               <li class="Primer"><a>Ingresos</a>';
htmlVista +='                <ul class="sub">';
htmlVista +='                    <li class="vistas"><a href="#">Listado de Ingresos</a></li>';
htmlVista +='                    <li class="vistas"><a href="#">Agregar Nuevo Ingreso</a></li>';
htmlVista +='                </ul>';
htmlVista +='                </li>';
htmlVista +='               <li class="Primer"><a>Gastos</a>';
htmlVista +='                    <ul class="sub" >';
htmlVista +='                    <li class="vistas"><a href="#">Listado de Gastos</a></li>';
htmlVista +='                    <li class="vistas"><a href="#">Agregar Nuevo Gasto</a></li>';
htmlVista +='                </ul>';
htmlVista +='                </li >';
htmlVista +='                <li class="Primer"><a>Configuraciones Generales</a>';
htmlVista +='                    <ul class="sub" >';
htmlVista +='                        <li class="vistas"><a href="#">Seleccionar el tipo de pago por defecto</a></li>';
htmlVista +='                        <li><a href="#">Indicar Balance</a></li>';
htmlVista +='                    </ul>';
htmlVista +='                </li>';
htmlVista +='                <li class="Primer"><a>Estadísticas</a></li>';
htmlVista +='                <li class="Primer" id="cerrar"><a>Cerrar Sesión</a></li>';
htmlVista +='            </ul>';
htmlVista +='        </div>';
htmlVista +='        <div class="contenido " id="contenido">';
htmlVista +='           <div class="info">';
htmlVista +='<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
htmlVista +='            </div>';
htmlVista +='       <div class="footer">';
htmlVista +='           <h4>eWallet</h4>';
htmlVista +='            <ul>';
htmlVista +='                <li><a href="#">Enlace</a></li>';
htmlVista +='                <li><a href="#">Enlace</a></li>';
htmlVista +='                <li><a href="#">Enlace</a></li>';
htmlVista +='                <li><a href="#">Enlace</a></li>';
htmlVista +='            </ul>';
htmlVista +='            <span>eWallet R&L ©</span>';
htmlVista +='        </div>';
htmlVista +='    </div>';
htmlVista +='</div> ';

//Cuentas - Efectivo
htmlCuentasEfectivo ="";

htmlCuentasEfectivo += "<section class='mostrarDinero'>";
htmlCuentasEfectivo += "    <section class='tarjeta'>";
htmlCuentasEfectivo += "        <span class='MostrarDatos'>Dinero Actual:</span>";
htmlCuentasEfectivo += "        <section>";
htmlCuentasEfectivo += "            <img src='../archivos_generales/img/dineroActual.png' class='imgDoc'>";
htmlCuentasEfectivo += "            <br>";
htmlCuentasEfectivo += "            <span class='MostrarDatos' id='dineroTotal'></span>";
htmlCuentasEfectivo += "        </section>";
htmlCuentasEfectivo += "        <span class='MostrarDatos Dinero' id='mostrar_dinero'></span>";
htmlCuentasEfectivo += "    </section>";
htmlCuentasEfectivo += "</section>";
htmlCuentasEfectivo += "<br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br>";


// Login

htmlLogin += '<br><br><br><br><br><br><br><br> ';
htmlLogin += '<section id="login">';
htmlLogin += '<h2>Iniciar sesion</h2>';
htmlLogin += '<form id="frmlogin" class="cont">';
htmlLogin += ' <label class="lbl">Correo electrónico</label>';
htmlLogin += '<input type="text" class="txt" name="correo" id="correo">';
htmlLogin += '<label class="lbl">Contraseña</label>';
htmlLogin += '<input type="text" class="txt" name="contra" id="contra">';
htmlLogin += ' <br>';
htmlLogin += '  <input type="button" value="Iniciar sesion" id="iniciar_sesion">';
htmlLogin += ' <br>';
htmlLogin += '  </form>';
htmlLogin += '</section>';
htmlLogin += '<br><br><br><br><br><br><br><br> ';




//Index

htmlIndex += '                       <div class="p1">';
htmlIndex += '                           <h2>A solo un click!</h2><br><br>';
htmlIndex += '                           <p >';
htmlIndex += '                                Mi presupuesto no es un bloc de cuentas corriente. Con esta app tendrá a la vista sus ingresos y gastos y podrá administrar mejor el dinero que tenga. <br><br>';
htmlIndex += '                                VENTAJAS CON RESPECTO A OTRAS APP<br><br><br>';
htmlIndex += '                                ES ECONÓMICO. Al contrario que otras app el precio se mantiene superbajo y se ha desarrollado como app universal.';
htmlIndex += '                                Es decir, no pagará una vez por una versión para iPad y otra vez por una versión para iPhone. ';
htmlIndex += '                                En cuanto al conjunto de funciones está aplicación no tiene nada que envidiar a otras app más caras. Convénzase del gran rango de sus funciones.';
htmlIndex += '                                Desarrollamos la app permanentemente. Escuchamos gustosos sus deseos y sugerencias e intentamos tenerlas en cuenta.<br><br>';
htmlIndex += '                                ES SIMPLE. Un bloc de cuentas debería ser claro y sencillo de usar, de lo contrario uno pierde las ganas de usarlo rápidamente y el control de su situación financiera. ';
htmlIndex += '                                Con esta app tendrá a la vista sus ingresos y gastos y podrá así administrar mejor el dinero que tenga. Muchas app comparables están sobrecargadas y son liosas.';
htmlIndex += '                                Esta app aspira a hacerlo más sencillo y mejor.<br><br>';
htmlIndex += '                                ES ESTRUCTURADA. No se deje engañar por apariencias simples y bonitas. La apariencia se ha pretendido mantener sencilla';
htmlIndex += '                                y ofrece todas las funciones que necesita para la planificación y administración de sus finanzas. Entre ellas se ';
htmlIndex += '                                cuentan diagramas e informes muy expresivos. En el resumen tendrá todas las cifras necesarias bajo control. No se ';
htmlIndex += '                                puede representar de forma más sencilla la situación financiera a lo largo de los meses.<br><br><br>';
htmlIndex += '                             </p> ';
htmlIndex += '                         </div>';
htmlIndex +='  <br><br><br><br><br><br><br><br><br><br> <br><br> ';
htmlIndex +='   <div id="cont_footer">';
htmlIndex +='   <div class="footer">';
htmlIndex +='   <h4>eWallet</h4>';
htmlIndex +='   <ul>';
htmlIndex +='       <li><a href="#">Enlace</a></li>';
htmlIndex +='       <li><a href="#">Enlace</a></li>';
htmlIndex +='       <li><a href="#">Enlace</a></li>';
htmlIndex +='       <li><a href="#">Enlace</a></li>';
htmlIndex +='   </ul>';
htmlIndex +='   <span>eWallet R&L ©</span>';
htmlIndex +='   </div></div>';


// VISTAS GENERALEEES

CuentasDineroAcutal ="";
CuentasVer ="";
CuentasAgregar ="";
CuentasVerTar ="";
CuentasAgregarTar ="";
IngresosVer ="";
IngresosAgregar ="";
GastosVer ="";
GastosAgregar ="";
ConfigSelec ="";


CuentasDineroAcutal +='<section class="Sec-Info">';
CuentasDineroAcutal +='    <p>';
CuentasDineroAcutal +='     </p>';
CuentasDineroAcutal +='     <br>';
CuentasDineroAcutal +='     <section class="tarjeta">';
CuentasDineroAcutal +='            <div>';
CuentasDineroAcutal +='                 <p><span>Dinero Actual</span>';
CuentasDineroAcutal +='                 </p>';
CuentasDineroAcutal +='                 <img src="../archivos_generales/img/dineroActual.png" class="imgDoc">';
CuentasDineroAcutal +='            </div>';
CuentasDineroAcutal +='     </section>';
CuentasDineroAcutal +='     <section class="tarjeta">';
CuentasDineroAcutal +='             <div>';
CuentasDineroAcutal +='                  <p><span>$ 10000</span>';
CuentasDineroAcutal +='                  </p>';
CuentasDineroAcutal +='             </div>';
CuentasDineroAcutal +='      </section>';
CuentasDineroAcutal +='       <br><br><br><br><br><br><br><br><br>';
CuentasDineroAcutal +='<br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
CuentasDineroAcutal +='</section>';
                               
CuentasVer +='<section class="Sec-Info">';
CuentasVer +=' <section class="tarjeta">';
CuentasVer +='       <h3>Cuentas Actuales</h3>';
CuentasVer +='        <div>';
CuentasVer +='            <span>Cuenta 1</span><br>';
CuentasVer +='            <span>Cuenta 2</span><br>';
CuentasVer +='            <span>Cuenta 3</span><br>';
CuentasVer +='            <span>Cuenta 4</span><br>';
CuentasVer +='            <span>Cuenta 5</span><br>';
CuentasVer +='            <span>Cuenta 6</span><br>';
CuentasVer +='        </div>';
CuentasVer +=' </section>';
CuentasVer +=' <br><br><br><br><br><br><br><br><br>';
CuentasVer +='<br><br><br><br><br><br><br><br><br>';
CuentasVer +='<br><br><br><br>';
CuentasVer +='</section>';


CuentasAgregar +='<section class="Sec-Info">';
CuentasAgregar +='     <section class="tarjeta-2">';
CuentasAgregar +='    <div>';
CuentasAgregar +='        <form id="frmregistro" class="cont">';
CuentasAgregar +='                <label class="lbl" id="lbl1">Banco: </label>';
CuentasAgregar +='                <input type="text"  class="txt" autocomplete="off">';
CuentasAgregar +='                <label class="lbl" id="lbl1">Número de Cuenta: </label>';
CuentasAgregar +='                <input type="text"  class="txt" autocomplete="off">';
CuentasAgregar +='                <label class="lbl" id="lbl1">Saldo Actual: </label>';
CuentasAgregar +='                <input type="text"  class="txt" autocomplete="off">';
CuentasAgregar +='                <br><br>';
CuentasAgregar +='                <button>Agregar</button>';
CuentasAgregar +='            </form>';
CuentasAgregar +='    </div>';
CuentasAgregar +='     </section>';
CuentasAgregar +='     <br><br><br><br><br><br><br><br><br>';
CuentasAgregar +='     <br><br><br><br><br><br><br><br><br>';
CuentasAgregar +='     <br><br><br><br>';
CuentasAgregar +='</section>';


CuentasVerTar +='<section class="Sec-Info">';
CuentasVerTar +='     <section class="tarjeta">';
CuentasVerTar +='           <h3>Tarjetas Actuales</h3>';
CuentasVerTar +='            <div>';
CuentasVerTar +='                <span>Tarjeta 1</span><br>';
CuentasVerTar +='                <span>Tarjeta 2</span><br>';
CuentasVerTar +='                <span>Tarjeta 3</span><br>';
CuentasVerTar +='                <span>Tarjeta 4</span><br>';
CuentasVerTar +='                <span>Tarjeta 5</span><br>';
CuentasVerTar +='                <span>Tarjeta 6</span><br>';
CuentasVerTar +='            </div>';
CuentasVerTar +='     </section>';
CuentasVerTar +='     <br><br><br><br><br><br><br><br><br>';
CuentasVerTar +='     <br><br><br><br><br><br><br><br><br>';
CuentasVerTar +='     <br><br><br><br>';
CuentasVerTar +='</section>';

CuentasAgregarTar +='<section class="Sec-Info">';
CuentasAgregarTar +='         <section class="tarjeta-2">';
CuentasAgregarTar +='        <div>';
CuentasAgregarTar +='            <form id="frmregistro" class="cont">';
CuentasAgregarTar +='                    <label class="lbl" id="lbl1">Banco: </label>';
CuentasAgregarTar +='                    <input type="text"  class="txt" autocomplete="off">';
CuentasAgregarTar +='                    <label class="lbl" id="lbl1">Número de Tarjetaa: </label>';
CuentasAgregarTar +='                    <input type="text"  class="txt" autocomplete="off">';
CuentasAgregarTar +='                    <label class="lbl" id="lbl1">Saldo Actual: </label>';
CuentasAgregarTar +='                    <input type="text"  class="txt" autocomplete="off">';
CuentasAgregarTar +='                    <label class="lbl" id="lbl1">% de Interes Anual: </label>';
CuentasAgregarTar +='                    <input type="text"  class="txt" autocomplete="off">';
CuentasAgregarTar +='                    <label class="lbl" id="lbl1">Ultima Fecha de Pago </label>';
CuentasAgregarTar +='                    <input type="text"  class="txt" autocomplete="off">';
CuentasAgregarTar +='                    <br><br>';
CuentasAgregarTar +='                    <button>Agregar</button>';
CuentasAgregarTar +='                </form>';
CuentasAgregarTar +='        </div>';
CuentasAgregarTar +='         </section>';
CuentasAgregarTar +='         <br><br><br><br><br><br><br><br><br>';
CuentasAgregarTar +='         <br><br><br><br><br><br><br><br><br>';
CuentasAgregarTar +='         <br><br><br><br>';
CuentasAgregarTar +='</section>';

IngresosVer +='<section class="Sec-Info">';
IngresosVer +='     <section class="tarjeta">';
IngresosVer +='           <h3>Ingresos Actuales</h3>';
IngresosVer +='            <div>';
IngresosVer +='                <span>Ingresos 1</span><br>';
IngresosVer +='                <span>Ingresos 2</span><br>';
IngresosVer +='                <span>Ingresos 3</span><br>';
IngresosVer +='                <span>Ingresos 4</span><br>';
IngresosVer +='                <span>Ingresos 5</span><br>';
IngresosVer +='                <span>Ingresos 6</span><br>';
IngresosVer +='            </div>';
IngresosVer +='     </section>';
IngresosVer +='     <br><br><br><br><br><br><br><br><br>';
IngresosVer +='     <br><br><br><br><br><br><br><br><br>';
IngresosVer +='     <br><br><br><br>';
IngresosVer +='</section>';

IngresosAgregar +='<section class="Sec-Info">';
IngresosAgregar +='         <section class="tarjeta-2">';
IngresosAgregar +='        <div>';
IngresosAgregar +='            <form id="frmregistro" class="cont">';
IngresosAgregar +='                    <label class="lbl" id="lbl1">Fecha: </label>';
IngresosAgregar +='                    <input type="text"  class="txt" autocomplete="off">';
IngresosAgregar +='                    <label class="lbl" id="lbl1">Motivo: </label>';
IngresosAgregar +='                    <input type="text"  class="txt" autocomplete="off">';
IngresosAgregar +='                    <label class="lbl" id="lbl1">Monto: </label>';
IngresosAgregar +='                    <input type="text"  class="txt" autocomplete="off">';
IngresosAgregar +='                    <label class="lbl" id="lbl1">cuenta donde se almacenó: </label>';
IngresosAgregar +='                    <input type="text"  class="txt" autocomplete="off">';
IngresosAgregar +='                    <br><br>';
IngresosAgregar +='                    <button>Agregar</button>';
IngresosAgregar +='                </form>';
IngresosAgregar +='        </div>';
IngresosAgregar +='         </section>';
IngresosAgregar +='         <br><br><br><br><br><br><br><br><br>';
IngresosAgregar +='         <br><br><br><br><br><br><br><br><br>';
IngresosAgregar +='         <br><br><br><br>';
IngresosAgregar +='</section>';

GastosVer +='<section class="Sec-Info">';
GastosVer +='<section class="tarjeta">';
GastosVer +='   <h3>Gastos Actuales</h3>';
GastosVer +='    <div>';
GastosVer +='        <span>Gasto 1</span><br>';
GastosVer +='        <span>Gasto 2</span><br>';
GastosVer +='        <span>Gasto 3</span><br>';
GastosVer +='        <span>Gasto 4</span><br>';
GastosVer +='        <span>Gasto 5</span><br>';
GastosVer +='        <span>Gasto 6</span><br>';
GastosVer +='    </div>';
GastosVer +='</section>';
GastosVer +='<br><br><br><br><br><br><br><br><br>';
GastosVer +='<br><br><br><br><br><br><br><br><br>';
GastosVer +='<br><br><br><br>';
GastosVer +='</section>';


GastosAgregar +='<section class="Sec-Info">';
GastosAgregar +='     <section class="tarjeta-2">';
GastosAgregar +='    <div>';
GastosAgregar +='        <form id="frmregistro" class="cont">';
GastosAgregar +='                <label class="lbl" id="lbl1">Fecha: </label>';
GastosAgregar +='                <input type="text"  class="txt" autocomplete="off">';
GastosAgregar +='                <label class="lbl" id="lbl1">Motivo: </label>';
GastosAgregar +='                <input type="text"  class="txt" autocomplete="off">';
GastosAgregar +='                <label class="lbl" id="lbl1">Monto: </label>';
GastosAgregar +='                <input type="text"  class="txt" autocomplete="off">';
GastosAgregar +='                <label class="lbl" id="lbl1">cuenta donde se almacenó: </label>';
GastosAgregar +='                <input type="text"  class="txt" autocomplete="off">';
GastosAgregar +='                <br> <br> <br>';
GastosAgregar +='                <select id="motivo">';
GastosAgregar +='                    <option>Pago Celular</option>';
GastosAgregar +='                    <option>Pago Luz Eléctrica</option>';
GastosAgregar +='                    <option>Pago de Agua</option>';
GastosAgregar +='                    <option>Pago de Casa/Alquiler</option>';
GastosAgregar +='                    <option>Pago de Cable</option>';
GastosAgregar +='                    <option>Pago de Internet</option>';
GastosAgregar +='                    <option>Pago de Educación</option>';
GastosAgregar +='                    <option>Supermercado</option>';
GastosAgregar +='                    <option>Cine</option>';
GastosAgregar +='                    <option>Teatro</option>';
GastosAgregar +='                    <option>Ropa</option>';
GastosAgregar +='                    <option>Restaurante</option>';
GastosAgregar +='                    <option>Tenología</option>';
GastosAgregar +='                    <option>Mascota</option>';
GastosAgregar +='                    <option>Mascota</option>';
GastosAgregar +='                    <option>Gasolina</option>';
GastosAgregar +='                    <option>reparaciones</option>';
GastosAgregar +='               </select>';
GastosAgregar +='                <br><br>';
GastosAgregar +='                <button>Agregar</button>';
GastosAgregar +='            </form>';
GastosAgregar +='    </div>';
GastosAgregar +='     </section>';
GastosAgregar +='     <br><br><br><br><br><br><br><br><br>';
GastosAgregar +='     <br><br><br><br><br><br><br><br><br>';
GastosAgregar +='     <br><br><br><br>';
GastosAgregar +='</section>';


ConfigSelec +=' <section class="Sec-Info">';
ConfigSelec +='         <section class="tarjeta-2">';
ConfigSelec +='        <div>';
ConfigSelec +='            <select id="tipoP" onchange="verSelect()">';
ConfigSelec +='                <option value="e">Efectivo</option>';
ConfigSelec +='                <option value="c">Cuenta de Ahorro</option>';
ConfigSelec +='                <option value="t">Tarjeta de Credito</option>';
ConfigSelec +='           </select>';
ConfigSelec +='           <br><br> <br><br>';
ConfigSelec +='           <select id="cuentas">';
ConfigSelec +='                <option>Cuenta 1</option>';
ConfigSelec +='                <option>Cuenta 2</option>';
ConfigSelec +='                <option>Cuenta 3</option>';
ConfigSelec +='           </select>';
ConfigSelec +='           <select id="tarjetas">';
ConfigSelec +='                <option>Tarjeta 1</option>';
ConfigSelec +='                <option>Tarjeta 2</option>';
ConfigSelec +='                <option>Tarjeta 3</option>';
ConfigSelec +='           </select>';
ConfigSelec +='            <br><br>';
ConfigSelec +='            <button>Seleccionar</button>';
ConfigSelec +='        </div>';
ConfigSelec +='         </section>';
ConfigSelec +='         <br><br><br><br><br><br><br><br><br>';
ConfigSelec +='         <br><br><br><br><br><br><br><br><br>';
ConfigSelec +='         <br><br><br><br>';
ConfigSelec +='</section>';

// Arreglo de vistas

VistasTotales = [CuentasDineroAcutal, CuentasVer, CuentasAgregar, CuentasVerTar, CuentasAgregarTar, IngresosVer,IngresosAgregar, GastosVer, GastosAgregar, ConfigSelec];

//Primera sesion
htmlPrimera_sesion += "<input type='text' id='monto'>";
htmlPrimera_sesion += "<input type = 'button' id='btn_ingresarmonto' value='Ingresar'>";
var monto;

function primera_sesion() {
    contenedor.innerHTML = "";
    contenedor.innerHTML = htmlPrimera_sesion;
    boton_ingresarmonto = document.getElementById("btn_ingresarmonto");
    if (bandera_sesion == false) {
        bandera_sesion = true;
    }


    boton_ingresarmonto.addEventListener("click", function () {
        monto = document.getElementById("monto").value;
        psesion();
    });
}

boton_registrar.addEventListener("click", function () {
    contenedor.innerHTML = "";
    contenedor.innerHTML = htmlRegistro;
    cargarEstilo();
    iniciar();
})

boton_login.addEventListener("click", function () {
    contenedor.innerHTML = "";
    contenedor.innerHTML = htmlLogin;
    cargarEstilo();
    iniciar_controles_login();


})

boton_index.addEventListener("click", function () {
    contenedor.innerHTML = "";
    contenedor.innerHTML = htmlIndex;
})
