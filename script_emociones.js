/* Estilos básicos y diseño responsivo */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
}

h1, h2 {
    text-align: center;
    color: #333;
}

.intro-message {
    background-color: #e0f7fa;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.intro-message h2 {
    color: #00796b;
    margin-top: 0;
}

.intro-message p {
    color: #555;
    line-height: 1.5;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    color: #555;
}

select, textarea, input {
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
}

button {
    padding: 10px;
    margin-top: 15px;
    background-color: #28a745;
    color: #ffffff;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#mood-history {
    list-style-type: none;
    padding: 0;
}

#mood-history li {
    background-color: #e9ecef;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    position: relative;
}

#mood-history li p {
    margin: 5px 0;
}

.action-buttons {
    position: absolute;
    top: 10px;
    right: 10px;
}

.action-buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 5px;
}

.action-buttons button.edit {
    color: #007bff;
}

.action-buttons button.delete {
    color: #dc3545;
}

.action-buttons button:hover {
    opacity: 0.7;
}

.edit-form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.edit-form label {
    margin-top: 10px;
    color: #555;
}

.edit-form select,
.edit-form textarea {
    padding: 8px;
    margin-top: 5px;
    font-size: 14px;
}

.edit-form button {
    padding: 8px;
    margin-top: 10px;
    background-color: #ffc107;
    color: #ffffff;
    border: none;
    font-size: 14px;
    cursor: pointer;
}

.edit-form button:hover {
    background-color: #e0a800;
}

/* Media Queries para dispositivos móviles */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }

    button {
        font-size: 14px;
    }
}
