import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { ContextoCategorias } from "../context/ContextoCategorias";
import { getItemCategories } from "../queries/items.queries";
import ListadoCategoriasItem from "./ListadoCategoriasItem";

const ListadoCategorias = () => {
	const { seleccionarCategoria } = useContext(ContextoCategorias);
	const {
		data: categorias,
		isLoading,
		isError,
	} = useQuery("itemCategories", getItemCategories);

	if (isLoading) return <div>Cargando categorias...</div>;
	if (isError) return <div>No se pudo cargar categorias...</div>;

	return (
		<div id="listadoCategorias">
			{categorias.map((categoria, index) => (
				<ListadoCategoriasItem
					key={index}
					categoria={categoria}
					seleccionarCategoria={() => seleccionarCategoria(categoria)}
				/>
			))}
		</div>
	);
};

export default ListadoCategorias;
