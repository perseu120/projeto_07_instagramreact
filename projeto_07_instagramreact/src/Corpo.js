import Storie from './Storie';

export default function Corpo() {

    return (
        <div class="esquerda">
            <Storie />
            <Posts />
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
    return (
        <div class="posts">
            {posts.map((object) => (
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={object.img} />
                            {object.name}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={object.img} />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={object.iconLike} />
                            <div class="texto">
                                Curtido por <strong>{object.userLike}</strong> e <strong>outras {object.qtd} pessoas</strong>
                            </div>
                        </div>
                    </div>

                </div>

            ))}

        </div>
    )

}

    // <div class="esquerda">




    //     <div class="post">
    //         <div class="topo">
    //             <div class="usuario">
    //                 <img src="assets/img/barked.svg" />
    //                 barked
    //             </div>
    //             <div class="acoes">
    //                 <ion-icon name="ellipsis-horizontal"></ion-icon>
    //             </div>
    //         </div>

    //         <div class="conteudo">
    //             <img src="assets/img/dog.svg" />
    //         </div>

    //         <div class="fundo">
    //             <div class="acoes">
    //                 <div>
    //                     <ion-icon name="heart-outline"></ion-icon>
    //                     <ion-icon name="chatbubble-outline"></ion-icon>
    //                     <ion-icon name="paper-plane-outline"></ion-icon>
    //                 </div>
    //                 <div>
    //                     <ion-icon name="bookmark-outline"></ion-icon>
    //                 </div>
    //             </div>

    //             <div class="curtidas">
    //                 <img src="assets/img/adorable_animals.svg" />
    //                 <div class="texto">
    //                     Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>