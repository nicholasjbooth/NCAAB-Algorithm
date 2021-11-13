import React, { Component } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

import API_ENDPOINT from "./api/endpoint"

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: null, password: "", responseMsg: "", hcam: 1 };
    }

    componentDidMount = () => {
        fetch(`${API_ENDPOINT}/settings`, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            this.setState({hcad: data.hcad, hcao: data.hcao, last_updated_hcam: data.last_updated_values, last_updated_csv: data.last_updated_csv, hcam : data.hcao})
        })
    }

    onHCAMChange = (e) => this.setState({ hcam: e.target.value });

    onPasswordChange = (e) => this.setState({ password: e.target.value });

    onFileChange = (e) => this.setState({ selectedFile: e.target.files[0] });

    onFileUpload = () => {

        const formData = new FormData();

        if(this.state.selectedFile != null)
            formData.append(
                "uploadedFile",
                this.state.selectedFile,
                this.state.selectedFile.name,
            );
        formData.append("hcam", this.state.hcam)
        formData.append("password", this.state.password)

        fetch(`${API_ENDPOINT}/settings`, { method: "POST", body: formData })
            .then(res => res.json())
            .then(data => this.setState({hcad: data.hcad, hcao: data.hcao, last_updated_hcam: data.last_updated_values, last_updated_csv: data.last_updated_csv}))
            .catch(err => this.setState({ responseMsg: err }));

    };



    render() {

        return (
            <div className="settings-parent secondary-color">

                        <Table variant="dark" className="flex-item" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Value</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HCAO</td>
                                    <td>{this.state.hcao}</td>

                                </tr>
                                <tr>
                                    <td>HCAD</td>
                                    <td>{this.state.hcad}</td>
                                </tr>
                                <tr>
                                    <td>HCAM Last Updated</td>
                                    <td>{this.state.last_updated_hcam}</td>
                                </tr>
                                <tr>
                                    <td>CSV Last Updated</td>
                                    <td>{this.state.last_updated_csv}</td>
                                </tr>
                            </tbody>
                        </Table>
                   
                        <Form className="flex-item">

                            <h1 className="mb-5">Settings</h1>

                            <input className="mb-5 secondary-color" type="file" accept=".csv" onChange={this.onFileChange} />

                            <Form.Group className="secondary-color">
                                <Form.Label className="secondary-color">Home Court Advantage Multiplier</Form.Label>
                                <Form.Control type="text" placeholder={this.state.password} onChange={this.onHCAMChange} value={this.state.hcam} />
                            </Form.Group>

                            <Form.Group className="secondary-color">
                                <Form.Label className="secondary-color">Password</Form.Label>
                                <Form.Control type="password" placeholder={this.state.password} onChange={this.onPasswordChange} />
                            </Form.Group>
                            <Button className="mb-5 primary-color" onClick={this.onFileUpload}>
                                Submit
                             </Button>

                        </Form>
             
         

                <style global jsx>{`

        .settings-parent {
            display: flex;
            justify-content: center;
            border:5px solid #00adb5;
            border-radius: 2rem;
            width: 1300px;
            margin: 5rem auto;
            align-items: center;
        }

        .flex-item {
            margin: 100px 100px;
            height: 400px;
            width: 500px;
            background-color: #393e46;
        }
      `}</style>
            </div>
        );
    }
}

export default Settings; 
