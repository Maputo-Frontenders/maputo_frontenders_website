function handlerTipoDeEvento(tipo: string) {
    if (tipo === "In-person" || tipo === "IN_PERSON") {
        return <p className='py-1 px-2 rounded-full bg-mf-dark w-fit font-semibold text-mf-secondary'>Presencial</p>;
    }

    return <p className='py-1 px-2 rounded-full bg-mf-least w-fit font-semibold text-mf-secondProposal'>{tipo}</p>;
}

export default handlerTipoDeEvento