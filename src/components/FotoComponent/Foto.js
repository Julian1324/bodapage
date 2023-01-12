import './Foto.css';

function Foto({anno, anno2, foto}) {
    return (
        <div id="fotoCont">
            { !!anno &&  <div className='annoFoto'>{anno}</div>}
            
            <div className='bordeFoto'>
                <div className={foto}></div>
            </div>
            { !!anno2 &&  <div className='annoFoto'>{anno2}</div>}
        </div>
    );
}

export {Foto};