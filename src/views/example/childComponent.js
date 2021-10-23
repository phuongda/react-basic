import React from 'react';

// class ChildComponent extends React.Component {

//     state = {
//         firstName: '',
//         lastName: '',
//     }

//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//     handleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Check data input:', this.state);
//     }

//     render() {
//         console.log('Check prop:', this.props);
//         // let name = this.props.name;
//         // let age = this.props.age;

//         let { name, age, address, jobs } = this.props;
//         let data = '';
//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                         data = jobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>{item.title} - {item.salary}</div>
//                             )
//                         })
//                     }
//                     {console.log('Check map array:', data)}
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    console.log('Check props:', props)

    let { jobs } = props;

    return (
        <>
            <div className="job-lists">
                {
                    jobs.map((item, index) => {
                        return (
                            <div key={item.id}>{item.title} - {item.salary}</div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChildComponent;