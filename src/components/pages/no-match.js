import React from 'react';
import { Link } from "react-router-dom";

export default function() {
return (
<div>
<h2> We couldn't find that page, let's try again. </h2>
<Link to ="/"> Return to Homepage </Link>
</div>
);
}