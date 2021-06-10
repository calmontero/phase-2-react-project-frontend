import React, { useState } from "react";

function HeroesForm({ onAddHero }) {
    const[form, setForm] = useState({
        name: '',
        realname: '',
        publisher: '',
        alignment: '',
        gender: '',
        image: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/heroes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            publisher: form.publisher,
            alignment: form.alignment,
            gender: form.gender,
            image: form.image,
            isFavorite: false,
          }),
        })
        .then((response) => response.json())
        .then((newHero) => onAddHero(newHero));
      }

    const updateField = e => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div className="container">
            <form className="add-hero-form" onSubmit={handleSubmit} >
                <input
                type="text"
                name="name"
                placeholder="Enter a hero's name..."
                className="input-text"
                value={form.name}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="realname"
                placeholder="Enter a hero's real name..."
                className="input-text"
                value={form.realname}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="publisher"
                placeholder="Enter a hero's publisher..."
                className="input-text"
                value={form.publisher}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="alignment"
                placeholder="Enter a hero's alignment..."
                className="input-text"
                value={form.alignment}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="gender"
                placeholder="Enter a hero's gender..."
                className="input-text"
                value={form.gender}
                onChange={updateField}
                />
                
                <input
                type="text"
                name="image"
                placeholder="Enter a hero's image URL..."
                className="input-text"
                value={form.image}
                onChange={updateField}
                />
                <input
                type="submit"
                name="submit"
                value="Create New Hero"
                className="submit"
                />
            </form>
        </div>
    );
}

export default HeroesForm;