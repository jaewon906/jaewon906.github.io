import styled from 'styled-components'
export default function loading() {
    const CircleLoading =styled.div`
       width:100px;
       height:100px;
       border-radius:100px;
    `
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <p>loading</p>
        <CircleLoading/>
    </div>
  )
}
