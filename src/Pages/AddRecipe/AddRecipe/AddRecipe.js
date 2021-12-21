import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const AddRecipe = () => {

    const { user } = useAuth();
    const [bloodSuccess, setBloodSuccess] = useState(false);

    const initialInfo = { recipeName: '', cuisine: '', category: '', author: user.displayName, ingredients: '', method: '' }
    const [bloodReq, setBloodReq] = useState(initialInfo);






    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...bloodReq };
        newLoginData[field] = value;
        console.log(newLoginData)
        setBloodReq(newLoginData);
    }

    const handleBloodReqSubmit = e => {
        e.preventDefault();
        const bloodPost = { ...bloodReq }
        setBloodReq(bloodPost);
        //send to server
        fetch("", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bloodPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBloodSuccess(true);
                }
            })


    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="col-md-8 add-blood">



                <Form onSubmit={handleBloodReqSubmit} className='w-50 my-5 ms-5'>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Recipe Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="recipeName"
                            onBlur={handleOnBlur}
                            placeholder='recipe name'
                        />
                    </Form.Group>



                    <Form.Group className="mb-3">
                        <Form.Label className="text-danger fw-bold">Cuisine</Form.Label>

                        <Form.Control
                            required
                            type="text"
                            name='cuisine'
                            onBlur={handleOnBlur}
                            placeholder='Cuisine' />
                    </Form.Group>



                    <Form.Label className="text-danger fw-bold">Category</Form.Label>
                    <Form.Select
                        onBlur={handleOnBlur}
                        name='category'
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
                            name="author"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control
                            placeholder='Ingredients:'
                            onBlur={handleOnBlur}
                            required
                            name='ingredients'
                            as="textarea"
                            rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger  fw-bold mt-3">
                        <Form.Label>Method</Form.Label>
                        <Form.Control placeholder='Method'
                            as="textarea"
                            onBlur={handleOnBlur}
                            required
                            name='method'
                            rows={2} />
                    </Form.Group>

                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label className="text-danger fw-bold">Recipe Image</Form.Label>
                        <Form.Control
                            type="file"
                            size="sm" />
                    </Form.Group>

                    <Button className='mt-3' variant="danger" type="submit">
                        Share Post
                    </Button>
                    {
                        bloodSuccess && <Alert className='mt-3' variant='success'>
                            Congratulations , Recipe Posted
                        </Alert>
                    }
                </Form>
            </div>
        </div>

    );
};

export default AddRecipe;