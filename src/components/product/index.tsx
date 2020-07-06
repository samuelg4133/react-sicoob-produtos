import React, {useEffect, useState} from "react";

import "./styles.css";
import api from "../../service/api"
import logo from "../../assets/logo.svg";


interface Produto {
    nome: string;
    image?: string;
}

const Product = ()=>{

    const [products, setProduct] = useState<Produto[]>([]);

    const [selectedProduct, setSelectedProduct] = useState<string>();

    useEffect(()=>{
        api.get("produtos").then(response=>{
              setProduct(response.data);
            })
    },[]);

    function handleSelectProduct(id: string){
        setSelectedProduct(id);
    }

    return(
        <>
            <section>
                <h1>Solicitações</h1>
                <fieldset>
                    <legend>
                        <h2>Produtos</h2>
                        <span>Selecione uma opção</span>
                    </legend>
                    <ul className="items-grid">
                        {
                            products.map(
                                product=>
                                (
                                    <li
                                        key={product.nome}
                                        title={product.nome}
                                        onClick={() => handleSelectProduct(product.nome)}
                                        className={selectedProduct?.includes(product.nome) ? "selected" :""}
                                    >
                                        <img src={product.image == null? logo: product.image}
                                             alt={product.nome} id={product.image != null? product.nome : ""}/>
                                        <span>{product.nome}</span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </fieldset>
            </section>
            </>
    );
}

export default Product;
