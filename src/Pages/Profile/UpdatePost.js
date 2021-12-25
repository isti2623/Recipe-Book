import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';

const UpdatePost = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    const [recipeSuccess, setRecipeSuccess] = useState(false);

    const [recipeName, setRecipeName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [method, setMethod] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        // const recipePost = { ...recipeReq }

        formData.append('recipeName', recipeName);
        formData.append('cuisine', cuisine);
        formData.append('category', category);
        formData.append('author', author);
        formData.append('ingredients', ingredients);
        formData.append('method', method);
        formData.append('image', image);
        //formData.append('recipePost', recipePost);
        fetch(`http://localhost:5000/recipePostReq/${id}`, {
            method: 'PUT',
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
    };

    return (
        <div>
            <Navigation></Navigation>


            <Form onSubmit={handleSubmit} className='w-50 my-5 ms-5'>
                <Form.Group className="mb-3">
                    <Form.Label className="text-danger fw-bold">Recipe Name</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={user?.recipeName || ''}
                        onChange={e => setRecipeName(e.target.value)}
                        placeholder='recipe name'
                    />
                </Form.Group>



                <Form.Group className="mb-3">
                    <Form.Label className="text-danger fw-bold">Cuisine</Form.Label>

                    <Form.Control
                        required
                        type="text"
                        defaultValue={user?.cuisine || ''}
                        onChange={e => setCuisine(e.target.value)}
                        placeholder='Cuisine' />
                </Form.Group>



                <Form.Label className="text-danger fw-bold">Category</Form.Label>
                <Form.Select
                    defaultValue={user?.category || ''}
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
                        defaultValue={user?.author || ''}
                        type="text"
                        onChange={e => setAuthor(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        placeholder='Ingredients:'
                        onChange={e => setIngredients(e.target.value)}
                        required
                        defaultValue={user?.ingredients || ''}
                        as="textarea"
                        rows={3} />
                </Form.Group>

                <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                    <Form.Label>Method</Form.Label>
                    <Form.Control placeholder='Method'
                        as="textarea"
                        onChange={e => setMethod(e.target.value)}
                        required
                        defaultValue={user?.method || ''}
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
                    Update Post
                </Button>
                {
                    recipeSuccess && <Alert className='mt-3' variant='success'>
                        Your Post Updated
                    </Alert>
                }
            </Form>
        </div>

    );

};


export default UpdatePost;