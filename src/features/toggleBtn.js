export default function ToggleBtn({ active }) {

    const style = {
        width: '50px',
        height: '25px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '3px',
        border: '1px solid gray',
        cursor: 'pointer',
        fontSize:'14px',
        lineHeight:'20px'
   
    }
    const inner = {
        transition : 'width 0.3s',
        width:active?'45px':'22px',
        height:'20px',
        backgroundColor:'tomato',
        borderRadius:'20px',
        display:'flex',
        
    }
    const circle = {
        transition: 'opacity 0.3s ease',
        borderRadius: '20px',
        width: '20px',
        height: '20px',
        backgroundColor: 'tomato',
        border:'1px solid gray',
        opacity:active? 0 : 1,
        marginTop:'-0.5px'
    }
    const outerCricle = {
        borderRadius:'20px',
        width:'20px',
        height:'20px',
        border:'1px solid gray',
        backgroundColor:'white',
        transition: 'margin-left 0.3s ease, opacity 0.3s ease',
        marginLeft: active ? '25px' : '0px',
        marginTop:'-1px',

    }
    return (

        <div style={style}>
            <div style={inner}>
                <div style={outerCricle} ><div style={circle}></div></div>
            </div>
        </div>

    )
}