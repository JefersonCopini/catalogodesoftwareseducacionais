import Image from 'next/image'


export default function Home() {
  return (
    
    <div className="text-center ">
      
    <h1 className="text-center text-xl">Aplicação de carros</h1>
    <a href="/admin/listCar">Listar Carros</a>
    <a href="/admin/new">Cadastrar Carro</a>
    <a href="/app/components/delete"> Excluir carro</a>
    </div>
  )
}
