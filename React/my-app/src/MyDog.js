import React from "react";
import user from './user';


function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img className="avatar" src={user.imageUrl} alt={"Photo of" + user.name}
            // A regular  object inside the style
            style={{
                width: user.imageSize, height: user.imageSize
            }}
            />
        </>
    )
}

export default Profile