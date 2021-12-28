import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

import Navigation from '../../Shared/Navigation/Navigation';
import add from '../../../images/add.jpg'
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const AddRecipe = () => {

    const { user } = useAuth();
    const [recipeSuccess, setRecipeSuccess] = useState(false);

    const [name, setName] = useState(user?.displayName);
    const [email, setEmail] = useState(user?.email);
    const [recipeName, setRecipeName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [method, setMethod] = useState('');
    const [image, setImage] = useState(null);

    console.log(recipeName);
    console.log(cuisine);
    console.log(category);


    /* const initialInfo = { recipeName: '', cuisine: '', category: '', author: user.displayName, ingredients: '', method: '' }
    const [recipeReq, setRecipeReq] = useState(initialInfo);






    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...recipeReq };
        newLoginData[field] = value;
        console.log(newLoginData)
        setRecipeReq(newLoginData);
    } */

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        // const recipePost = { ...recipeReq }


        formData.append('name', name);
        formData.append('email', email);
        formData.append('recipeName', recipeName);
        formData.append('cuisine', cuisine);
        formData.append('category', category);
        formData.append('author', author);
        formData.append('ingredients', ingredients);
        formData.append('method', method);
        formData.append('image', image);

        //formData.append('recipePost', recipePost);
        fetch('https://glacial-beach-07491.herokuapp.com/recipePostReq', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setRecipeSuccess(true);
                }
            })
            .catch(error => {

            });




        /*        const recipePost = { ...recipeReq }
               setRecipeReq(recipePost);
               //send to server
               fetch("https://glacial-beach-07491.herokuapp.com/recipePostReq", {
                   method: 'POST',
                   headers: {
                       'content-type': 'application/json'
                   },
                   body: JSON.stringify(recipePost)
               })
                   .then(res => res.json())
                   .then(data => {
                       if (data.insertedId) {
                           setRecipeSuccess(true);
                       }
                   })*/


    }

    return (
        <>
            <Navigation></Navigation>

            <div className="col-md-8 add-blood">
                <Form onSubmit={handleSubmit} className='w-50 my-5 ms-5'>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            disabled
                            onChange={e => setName(e.target.value)}
                            defaultValue={user.displayName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Email</Form.Label>
                        <Form.Control
                            required
                            disabled
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            defaultValue={user?.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Recipe Name</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setRecipeName(e.target.value)}
                            placeholder='recipe name'
                        />
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Cuisine</Form.Label>

                        <Form.Control
                            required
                            type="text"
                            onChange={e => setCuisine(e.target.value)}
                            placeholder='Cuisine' />
                    </Form.Group>



                    <Form.Label className="text-danger fw-bold">Category</Form.Label>
                    <Form.Select
                        onChange={e => setCategory(e.target.value)}
                        required
                        aria-label="Default select example">
                        <option>Select</option>
                        <option value="vagan">vagan</option>
                        <option value="diet">diet</option>
                        <option value="dessert">dessert</option>
                        <option value="cookies">cookies</option>
                        <option value="fastfood">fastfood</option>
                        <option value="drinks">drinks</option>
                        <option value="Meat">Meat</option>
                    </Form.Select>
                    <br />
                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Author</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder='author'
                            onChange={e => setAuthor(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control
                            placeholder='Ingredients:'
                            onChange={e => setIngredients(e.target.value)}
                            required
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Method</Form.Label>
                        <Form.Control placeholder='Method'
                            as="textarea"
                            onChange={e => setMethod(e.target.value)}
                            required
                            rows={2} />
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label className="text-danger fw-bold">Recipe Image</Form.Label>
                        <Form.Control
                            accept='image/*'
                            type="file"
                            size="sm"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </Form.Group>

                    <Button className='mt-3' variant="danger" type="submit">
                        Share Post
                    </Button>
                    {
                        recipeSuccess && <Alert className='mt-3' variant='success'>
                            Congratulations , Recipe Posted
                        </Alert>
                    }
                </Form>
            </div>
            <Footer></Footer>
        </>

    );

};

export default AddRecipe;