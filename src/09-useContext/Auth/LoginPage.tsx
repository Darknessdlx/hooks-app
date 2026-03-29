import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Link, useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";
import {toast} from "sonner";

export const LoginPage = () => {

    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState('')

    const navigation = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = login(+userId);

        if (!result) {
            toast.error('User not found')
        }

        navigation('/profile')
    }

    return (
        <div className={'flex flex-col items-center min-h-screen'}>
            <h1 className={'text-4xl font-bold'}>Login</h1>
            <hr/>

            <form className={'flex flex-col gap-2 my-10'}
                  onSubmit={handleSubmit}>
                <Input
                    type='number'
                    placeholder='Enter your id'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <Button type={'submit'} className={'bg-blue-500 text-white'}>
                    Login
                </Button>
            </form>

            <Link to={'/about'}>
                <Button variant={'ghost'}>Return to the main page</Button>
            </Link>
        </div>
    );
};
