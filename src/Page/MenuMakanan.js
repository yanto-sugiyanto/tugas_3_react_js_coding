import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
    constructor(props){
        super(props)
        this.state={
            pesan:0
        }
        this.rubahPesanan=this.rubahPesanan.bind(this)
        this.pesanan=this.pesanan.bind(this)
    }

    rubahPesanan(e){
        e.preventDefault()
        this.setState((state, props)=>{
            var temp=this.state.pesan+1
            return{
                pesan:temp
            }
        })
    }

    pesanan(e){
        e.preventDefault()
        console.log(e.target.value)
    }

    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                <   button onClick={this.rubahPesanan}>Pesan Sekarang </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang </button>
                                </center>
                            </td>
                             <td>
                                <ListMakanan makanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan makanan="https://oomphcdn01.sgp1.digitaloceanspaces.com/files/uploads/contributors/ARTICLE_IMAGE_UGC_1077_20208271077_yz3And2qnM.jpg" />
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="text" onChange={(e)=>this.pesanan(e)}/>
            <   h3>Pesanan Anda : {this.state.pesan}</h3>
            </div>
        )
    }
}

export default MenuMakanan;