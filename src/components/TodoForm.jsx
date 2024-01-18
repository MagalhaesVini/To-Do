import { useState } from 'react';

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(valeu, category);
    };

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Digite seu título' 
                onChange={(e) => setValue(e.target.valeu)}
                />
                <select onChange={(e) => setCategory(e.target.valeu)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudar">Estudar</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    ); 
}

export default TodoForm