# Devs Chile Encuestas Visualización

SESION 0: Elección de herramientas

- [x] No queremos estar volviendo a
SESION 1: SPRINT 0 - parte 1
  
  ### Mejoras al flujo de trabajo

  - [x] No queremos estar volviendo a correr el comando npm start por cada cambio que hacemos
  - [x] Queremos usar la variable `process.env.PORT`
  - [x] Utilizaremos Jest para crear pruebas para la estructura esperada que queremos consumir desde el Frontend. 
  

SESION 2: SPRINT 0 - parte 2
  ### TDD para nueva estructura
  ---
  - [ ] Resolver como evitar pegarle al servidor real y poder intervenir la llamada real
  - [x] Resolveremos la prueba e iremos refactorizando el código para lograr la siguiente estructura:

  **Antes**

  ```javascript
    [
      {
      "Submission ID": "KYpNA8",
      "Respondent ID": "wAOyKo",
      "Submitted at": "2022-07-01 0:24:28",
      "¿Cuál es tu género?": "Hombre",
      
      ...
      
      "¿Cuáles son las funciones que has realizado en tu vida profesional?": [
        "Desarrollador Back-end",
        "Desarrollador Front-end"
      ],
      "¿Cuál es el rol que cumples actualmente en tu trabajo remunerado?": "Desarrollador Full-stack",
      "¿Cuál es tu nivel de ingreso liquido mensual en tu trabajo actual?": "Entre $2.501.000 a $3.000.000"
      }
    ]
  ```

  **Después**
  ```javascript
  [
    {
      "Submission ID": "KYpNA8",
      "Respondent ID": "wAOyKo",
      "Submitted at": "2022-07-01 0:24:28",
      "answers": [
        {
          "question": "¿Cuál es tu género?",
          "answer": "Hombre"
        },
        ...
        {
          "question": "¿Cuáles son las funciones que has realizado en tu vida profesional?",
          "answer": [
            "Desarrollador Back-end",
            "Desarrollador Front-end"
          ],
        },
      ]
    }
  ]

  ```


  1. Vamos a producción!
  ---
  - ESLint utilizando StandardJS
  - Husky para correr ESLint y las pruebas. Pre-commit y Pre-push
  - GitHub Actions para correr las pruebas y salir a producción con Heroku 

