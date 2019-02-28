## Intrucciones:
# 1)Iniciar blockchain node server:
    En el terminal (Ctrl+Shift+ñ) escribir:
        > set FLASK_APP=node_server.py
        > flask run --port 8000

    Una instancia de nuestro nodo de blockchain queda funcionando en el puerto 8000.

# 2)Correr la aplicación:
    En otro terminal (Ctrl+Shift+ñ) escribir:
        > python run_app.py

La aplicación debería quedar funionando en
[http://localhost:5000]

# Otras direcciones:
 #1 Ver transacciones pendientes
 [http://localhost:8000/pending_tx]

 #2 Minar un bloque
 [http://localhost:8000/mine]

 #3 Ver cadena de bloques 
 [http://localhost:8000/chain]
