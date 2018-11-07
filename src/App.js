import React from 'react';

// CardGroup
// This component takes Card components as children and renders them.
// Example usage:
//      <CardGroup>
//          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
//      </CardGroup>
// The above would render a card group with a single child in it.

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

// subcat of cardgroup
// const Card = (props) => (
//     <div className="card cardGroup__card">
//         <div className="card__description cardGroup__cardDescription">
//             <div className={`icon fa ${props.icon} card__descriptionIcon`}></div>
//             <div className="card__descriptionText">
//                 {props.description}
//                 {/* null is absense of obj, and react likes null if not there */}
//                 {props.hint && <br/>}
//                 {props.hint && <span>{props.hint}</span>}
//             </div>
//         </div>
//         <div className="card__price">{props.price}</div>
//     </div>
// );
const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`}></div>
            <div className="card__descriptionText">
                {props.children}
            </div>
        </div>
        <div className="card__price">{props.price}</div>
    </div>
);
const CardDescription = props => (
    <div>{props.description}
    {/* null is absense of obj, and react likes null if not there */}
    {props.hint && <br/>}
    {props.hint && <span>{props.hint}</span>}
    </div>
)

// const App = () => (
//     <CardGroup>
//         <Card icon="fa-thumbs-o-up" description="Trial" price="Free!"/>
//         <Card icon="fa-trophy" description="Basic tier" hint="(most popular)" price="$10.00"/>
//         <Card icon="fa-bolt" description="Advanced tier" hint="(only for enterprise-level professionals)" price="$6,000.00"/>
//     </CardGroup>
// );
const App = () => (
    <CardGroup>
        <Card icon="fa-thumbs-o-up" price="Free!">
            <CardDescription description="Trial"/>
        </Card>
        <Card icon="fa-trophy" price="$10.00">
            <CardDescription description="Basic tier" hint="(most popular)"/>
        </Card>
        <Card icon="fa-bolt" price="$6,000.00">
            <CardDescription description="Advanced tier" hint="(only for enterprise-level professionals)"/>
        </Card>
    </CardGroup>
);

export default App;