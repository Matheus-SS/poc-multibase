- [] conectar em banco principal
- [] banco principal gerencia onde será feita as consultas
- [] cada consulta irá verificar em qual banco esta conectado antes de fazer a consulta
- [] usará decorators??
- [] provavelmente terá uma config que será gerenciada por volumes docker 
- [] na hora do login irá receber o connectionNumber de qual banco deve se conectar
- [] pensar em uma config para docker

- [] gerar na asssessoria uma pasta configOMNI e mapear com o projeto

conectado no bd principal
(number, headerKey)
login - group - headerKey - creditial

pegar info do bd que gato vai se conectar
conectar no banco especifico do gato
rota do gato em um banco especifico

feature multibase
- [] criar conexao com o banco correto e usar essa instancia para logar dependo do banco
- [] criar findall com paramentro de receber qual o banco pesquisar

feature login
- [] conectar no bd principal
- [] criar usuario passando qual banco pesquisar

feature pesquisar gatos
 - [] conectar no bd principal
 - [] pesquisar passando qual banco usar