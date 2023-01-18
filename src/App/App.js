import './App.css';
import { Foto } from '../components/FotoComponent/Foto';
import React from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { Slider } from '../components/Slider/Slider';

function App() {
  const fotosHistoria = [2011, 2012, 2013, 2014, 2015];
  const fotosHistoria2 = [2016, 2017, 2018, 2019, 2020];
  // const baseURL = "https://bodaserver.onrender.com/";
  const baseURL = "http://localhost:3100/";
  const [csvData, setCsvData] = React.useState([{id:0, nombre: 'Prueba', confirma_asistencia: 'Confirmo asistencia', numero_asistentes: '3'}]);
  React.useEffect(() => {
    console.log(csvData);
    if(csvData.length>1){
      document.querySelector('.csvlink').click();
      setCsvData([{id:0, nombre: 'Prueba', confirma_asistencia: 'Confirmo asistencia', numero_asistentes: '3'}]);
    }
  },[csvData]);
  
  const downloadCSV = (e) => {
    if (e.key !== '$') return;
    axios.get(`${baseURL}getDatabase`).then( (res)=>{
      console.log(res.data);
      res.data.forEach(d => {
        setCsvData(oldArray => [...oldArray, d]);
      });
    } );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('.inputConfirm').value;
    const confirmBox = document.querySelector('#confirmacion');
    const numAsisBox = document.querySelector('#asistencia');
    try {
      if (!!!confirmBox.selectedIndex || !!!numAsisBox.selectedIndex) return alert('Por favor confirma asistencia o número de asistentes');
      if (!!!nameInput) return alert('Digita tu nombre por favor');
      const post = {
        nombre: nameInput,
        confirma_asistencia: confirmBox.options[confirmBox.selectedIndex].text,
        numero_asistentes: numAsisBox.options[numAsisBox.selectedIndex].text
      }
      const res = await axios.post(`${baseURL}saveAsis`, post);
      console.log(res.status);
      if (res.status === 200) {
        setCsvData([{id:0, nombre: 'Prueba', confirma_asistencia: 'Confirmo asistencia', numero_asistentes: '3'}]);
        alert('Tu confirmación se ha enviado con éxito.');
      }

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div id='backCont'>
      <header>
        <div className='divColor'></div>
        <div className='divHeader'>
          <div className='Domine'>Diana & Sebas</div>
          <div className='chapa'></div>
          <div className='Domine'>18 . 03 . 2023</div>
        </div>
      </header>
      <div id='sec1'>
        <div className='frasePrinc'>La complicidad es tanta que nuestras vibraciones se complementan</div>
      </div>
      <div id='sec2'>
        <div className='nuestraHistoria'>Nuestra historia</div>
        <div className='backHistoria1'></div>

        {(window.innerWidth <= 414) && <div className='carousel'><Slider array1={fotosHistoria}></Slider></div>}
        {(window.innerWidth > 414) && <div className='fotoCont'>
          {fotosHistoria.map((f) => {
            return <Foto anno={f} foto={`B${f}`} key={f} />
          })}
        </div>}
        <div className='backWhite'>
          <div className='leftText'>No fue amor a primera vista, pero estaba destinado. Nos conocimos en el 2009 en el cumpleaños de Isa, teníamos 14 y 15 años, y desde ahí sabíamos que algo se estaba horneando. Nos ennoviamos en el 2012, y desde ese momento hemos compartido muchas aventuras juntos.</div>
          <div className='trigo'></div>
          <div className='rightText'>Relación a distancia, momentos felices, momentos duros en nuestras vidas, pero siempre con la seguridad de que lo nuestro duraría. Han pasado casi 14 años desde que nos conocimos, y ya se acerca el día de nuestro matrimonio
            ¡Gracias por hacer parte de esta historia de amor!</div>
        </div>
        {(window.innerWidth <= 414) && <div className='carousel2'><Slider array2={fotosHistoria2}></Slider></div>}
        {(window.innerWidth > 414) && <div className='fotoCont2'>
          {fotosHistoria2.map((f) => {
            return <Foto anno2={f} foto={`B${f}`} key={f} />
          })}
        </div>}

        {/* <div className='fotoCont2'>
          {fotosHistoria2.map((f) => {
            return <Foto anno2={f} foto={`B${f}`} key={f} />
          })}
        </div> */}
        <div className='backHistoria2'></div>
        <div className='backHistoria3'>
          <div className='annoCollage'>
            2021 <div className='miniTrigo'></div> 2022
          </div>
          <div className='trigoDec'></div>
          <div className='collage'>
            <div className='photoC1'></div>
            <div className='contPhotos'>
              <div className='photoC3'></div>
              <div className='photoC4'></div>
            </div>
            <div className='photoC2'></div>
          </div>
          <div className='DSCont'>
            <div className='chapa2' style={{ width: '100px', height: '100px', marginBottom: '6vh' }}></div>
            <div className='hashtags'>
              <div>#dianaypollo</div>
              <div>#vamoadarlehastatumorrys</div>
            </div>
          </div>
          <div className='backFlores'></div>
        </div>
      </div>
      <div id='sec3'>
        <div className='celebremos'>
          <div className='cartelCelebremos'>
            <div className='tituloCartel'>El gran día</div>
            <div className='cartelCont'>
              <div className='fecha'>Marzo 18, 2023 <br></br><br></br> 3:00 p.m. </div>
              <div className='trigoCartel'></div>
              <div className='locationCartel'>Finca E.G.S. <br></br><br></br> HC8G+2W, Yumbo </div>
            </div>
          </div>
        </div>
        <div className='comoLlegarHeader'></div>
        <div className='comoLlegarBack'>
          <div className='titleComoLlegar'>¿Cómo <br></br> &nbsp; llegar?</div>
          <div className='titleFinca'>Finca el balcón de las lilas</div>
          <video className='videoComoLlegar' controls>
            <source src="/Videos/videoComoLlegar.mp4" type="video/mp4" />
          </video>
          <div className='location'>Sugerencia: Después de pasar la casona girar a la izquierda, siguen derecho y después de pasar un pequeño puente iniciaran una subida luego encontraran a mano derecha un portón color crema. (Tenemos un parqueadero limitado, por favor intentar subir acompañado con otros invitados)</div>
        </div>
      </div>
      <div id='sec4'>
        {/* <div className='mapa'></div> */}
        <iframe className='mapa'
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43870.06715422183!2d-76.42739977037067!3d3.584232171879004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a011f6c84dcaf%3A0x5388e2324c6afc2e!2sHacienda%20La%20Isabella!5e0!3m2!1ses!2sco!4v1672800937352!5m2!1ses!2sco"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.097523143181!2d-76.5726605!3d3.5650218999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30ad5ba0abb3a9%3A0x3dd9d54e795149ce!2sFinca%20E.G.S!5e0!3m2!1ses!2sco!4v1673491830415!5m2!1ses!2sco"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title='map'
        />
      </div>
      <div id='sec5'>
        <div className='grandiaHeader'>El gran día</div>
        <div className='grandiaBack'>
          <div className='parejaCont'>
            <div className='parejaImg'></div>
            <div className='vestimentaCont'>
              <div className='vestimentaMujer'>Vestido largo, queremos que estés hermosa pero también cómoda
                (vamo' a darle hasta abajo)</div>
              <div className='vestimentaHombre'>Traje formal, tenes
                que estar listo para darle
                hasta el amanecer</div>
            </div>
          </div>
          <div id='brillarCont'>
            <div className='brillar'>¡Hoy es un gran día para brillar!</div>
            <div className='recuerda'>Queremos que te sientas espectacular, pero recuerda: vamos a darla TODA hasta el final</div>
          </div>
          <div className='ojo'>¡Ojo!</div>
          <div className='coloresRestrigidos'>Colores restringidos:</div>
          <div className='mujeres'>Mujeres: verde oliva, dorado, champaña, nude y blanco</div>
          <div className='hombres'>Hombres: traje gris claro</div>
          <div className='recomendaciones'>Recomendaciones:</div>
          <div className='evitarZapatos'>Evitar zapatos de punta delgada o tipo stiletto debido a que el matrimonio será en una casa campestre. <br></br> <br></br>
            Aunque tendremos algo para calentarnos, tener en cuenta que el clima se pondrá un poco frío en la noche.</div>
        </div>
      </div>
      <div id='sec6'>
        <div className='sec6Back'></div>
        <div className='izq'></div>
        <div className='der'>
          <div className='tituloAcompanas'>¿Nos acompañas <br></br> <br></br> &nbsp; &nbsp; &nbsp; &nbsp; o te lo pierdes?</div>
          <form className='form' onSubmit={onSubmit}>
            <div className='divForm'>
              <div className='titleNombre'>Nombre</div>
              <input type={'text'} className='inputConfirm' onKeyUp={downloadCSV} />
              <select name="confirmacion" id='confirmacion' defaultValue={'Confirmar asistencia'}>
                <option value={'Confirmar asistencia'}>Confirmar asistencia</option>
                <option value="si">Confirmo asistencia</option>
                <option value="no">No confirmo asistencia</option>
              </select>
              <select name="asistencia" id='asistencia' defaultValue={'Número de asistentes'}>
                <option value={'Número de asistentes'}>Número de asistentes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button type='submit' className='okButton'>Enviar</button>
              <CSVLink data={csvData} className='csvlink' >Download me</CSVLink>
            </div>
          </form>
          <div className='confirmaAsis'>Por favor confirma asistencia antes del 03 de Marzo. <br></br> Sin asistencia confirmada no podrás ingresar. </div>
        </div>
      </div>
      <div id='sec7'>
        <div className='tituloObsequios'>Obsequios:</div>
        <div className='obsequioCont'>
          <div className='obsequioText'>Si deseas darnos algún obsequio para celebrar y avudarnos a comenzar a construir nuestro hogar juntos, lo
            puedes hacer mediante el código QR o en el baúl de sobres que estará en el matrimonio.
          </div>
          <div className='codigoQR'></div>
        </div>
        <footer>
          <div className='Domine3' style={{ display: 'flex', width: '24vw', justifyContent: 'center', alignItems: 'center' }}>Diana & Sebas &nbsp;</div>
          <div className='chapa3'></div>
          <div className='vamoadarle'>#vamoadarlehastatumorrys</div>
        </footer>
      </div>
    </div>
  );
}

export default App;