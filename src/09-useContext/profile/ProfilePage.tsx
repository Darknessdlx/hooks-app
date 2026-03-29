import {Button} from "@/components/ui/button.tsx";
import {useContext} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";

export const ProfilePage = () => {

    const { user, logout } = useContext(UserContext);


    return (
        <div className={'flex flex-col items-center justify-center min-h-screen'}>
            <h1 className={'text-4xl'}>User profile</h1>
            <hr/>

            <pre className={'my-4'}>{JSON.stringify(user, null, 2)}</pre>

            <Button
                variant={'destructive'}
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    );
};
