
import Storie from './Storie';
import Sidebar from './Sidebar';
import { useState } from 'react';

export default function Corpo() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <Storie />
                <Posts />

            </div>
            <Sidebar />
        </div>

    )
}

function Posts() {

    const posts = [
        {
            icon: "./assets/img/meowed.svg",
            name: "meowed",
            img: "./assets/img/gato-telefone.svg",
            iconLike: "./assets/img/respondeai.svg",
            userLike: "respondeai",
            qtd: "101.523"
        },
        {
            icon: "./assets/img/barked.svg",
            name: "barked",
            img: "./assets/img/dog.svg",
            iconLike: "./assets/img/adorable_animals.svg",
            userLike: "adorable_animals",
            qtd: "99.159"
        }

    ]
    
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div class="posts">
            {posts.map((object, index) => (
                
                <Post key={index} img = {object.img} name={object.name} iconLike={object.iconLike} userLike={object.userLike} qtd ={object.qtd} />
               
            ))}

        </div>
    )

}

function Post(props){


    const {img, name, iconLike, userLike, qtd} = props;

    const [isClicked, setIsClicked ] = useState();

    return (
        <div class="post">

                    <Topo img={img} name={name} />

                    <Conteudo isClicked={isClicked} setIsClicked={setIsClicked} img={img} />

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon id = {isClicked ? "clicado": ""} 
                                        name={ isClicked ? "heart": "heart-outline"}></ion-icon>
                                        
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <Curtidas iconLike={iconLike} userLike={userLike} qtd ={qtd}/>

                    </div>

                </div>
    );
}

function Conteudo(props) {

    const { img, isClicked, setIsClicked } = props;

    return (
        <div onClick={ ()=>{ setIsClicked(!isClicked)
        } } class="conteudo">
            <img  src={img} />
        </div>
    )

}

function Topo(props) {

    const { img, name } = props;

    return (
        <div class="topo">
            <div class="usuario">
                <img src={img} />
                {name}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )

}

function Curtidas(props) {

    const { iconLike, userLike, qtd } = props;

    return (
        <div class="curtidas">
            <img src={iconLike} />
            <div class="texto">
                Curtido por <strong>{userLike}</strong> e <strong>outras {qtd} pessoas</strong>
            </div>
        </div>
    )

}