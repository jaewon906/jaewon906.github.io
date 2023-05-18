
function NotFound() {
    return (
        <div style={{width:'100vw', height:'100vw' ,position:'absolute', zIndex:100000, backgroundColor:'white', marginTop:'-60px'}}>
            <div style={{ marginTop: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <i style={{ fontSize: '300px', color: 'red' }} class="fa-solid fa-x"></i>
                <div style={{ fontSize: '40px', }}>404 NOT FOUND</div><br />
                <a href='/'style={{ fontSize: '20px', color: 'rgb(90,150,250)', textDecoration: 'none' }} to='/'>back to home</a>
            </div>
        </div>
    )
}

export default NotFound