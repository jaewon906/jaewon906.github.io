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
        width:'45px',
        height:'20px',
        backgroundColor:active ? 'tomato':"white",
        borderRadius:'20px',
        display:'flex',
    }
    const circle = {
        borderRadius: '20px',
        width: '20px',
        height: '20px',
        backgroundColor: active ? 'white':'tomato',
        border:'1px solid gray',
        transition: 'margin-left 0.3s ease, background-color 0.3s ease',
        marginLeft: active ? '0px' : '25px',
        marginTop:'-1px',
    }

    return (

        <div style={style}>
            <div style={inner}>
                <div style={circle}></div>
            </div>
        </div>

    )
}