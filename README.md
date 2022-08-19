# Devs Chile Encuestas Visualización

## SPRINT 0 - parte 1: Debate y elección de herramientas

[![Watch the video](https://img.youtube.com/vi/tP8FrJshpcQ/maxresdefault.jpg)](https://youtu.be/tP8FrJshpcQ)

 - [x] Selección Framework y generación de Boilerplate
 - [x] Consumir Endpoint de encuesta de Devs Chile con Postman para entender como funciona
 - [x] Seleccionar version LTS de NodeJS
 - [x] Elegir consumir endpoint con librerías o métodos nativos

## SPRINT 0 - parte 2: Mejoras al flujo de trabajo 

[![Watch the video](https://img.youtube.com/vi/DCDRZJkH0Kg/maxresdefault.jpg)](https://youtu.be/DCDRZJkH0Kg)

  - [x] No queremos estar volviendo a correr el comando npm start por cada cambio que hacemos
  - [x] Queremos usar la variable `process.env.PORT`
  - [x] Utilizaremos Jest para crear pruebas para la estructura esperada que queremos consumir desde el Frontend. 

## SPRINT 0 - parte 3: TDD para nueva estructura
[![Watch the video](https://img.youtube.com/vi/akNoxEpschU/maxresdefault.jpg)](https://youtu.be/akNoxEpschU)
  
  - [x] Resolver como evitar pegarle al servidor real y poder intervenir la llamada real
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

## SPRINT 0 - parte 4: Vamos a producción!

[![Watch the video](https://img.youtube.com/vi/db3FUifgMiQ/maxresdefault.jpg)](https://youtu.be/db3FUifgMiQ)
 
  - [x] ESLint utilizando StandardJS
  - [x] GitHub Actions para correr las pruebas y salir a producción con Heroku 
