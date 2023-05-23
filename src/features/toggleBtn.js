export default function ToggleBtn({ active }) {
    const style = {
        width: '45px',
        height: '20px',
        borderRadius: '20px',
        border:'1px solid gray',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize:'14px',
        lineHeight:'20px'
   
    }
    const inner = {
        transition : 'width 0.3s',
        width:active?'40px':'20px',
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
        opacity:active? 0 : 1,
    }
    const outerCricle = {
        borderRadius:'20px',
        width:'20px',
        height:'20px',
        border:'1px solid gray',
        backgroundColor:'white',
        transition: 'margin-left 0.3s ease, opacity 0.3s ease',
        margin:'-1px 0px 0px -1px',
        marginLeft: active ? '25px' : '0px'

    }
    return (

        <div style={style}>
            <div style={inner}>
                <div style={outerCricle} ><div style={circle}></div></div>
            </div>
        </div>

    )
}