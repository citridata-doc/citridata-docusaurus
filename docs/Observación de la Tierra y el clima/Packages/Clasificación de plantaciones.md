La edad de las plantaciones es un factor crucial en la agricultura, especialmente en cultivos leñosos y perennes como el olivar, los frutales y el viñedo, que son muy importantes en Andalucía. Se pueden clasificar las plantaciones por su edad de varias maneras, y cada fase tiene implicaciones diferentes en cuanto a manejo, producción y rentabilidad.

:::tip

La idea de este packages normaliza la información _raster_ del moddelo digital normalizado de vegetación disponible como url (https://wcs-mds.idee.es/mds). Esta información y archivos en formato _raster_ esta disponible en la web (https://idee.es) y corresponden a datos de las coberturas LiDAR a ravñes de vuelos de dron.

:::

La idea de este packages normaliza la información raster del moddelo digital normalizado de vegetación disponible como url (https://wcs-mds.idee.es/mds). Este información y archivos en formato raster esta disponible en la web idee.es y corresponden a datos de las coberturas LiDAR a ravñes de vuelos de dron.

## Metodología

CodeBlocks

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Diagramas

```mermaid
sequenceDiagram
    actor me
    participant apiSrv as control plane<br><br>api-server
    participant etcd as control plane<br><br>etcd datastore
    participant cntrlMgr as control plane<br><br>controller<br>manager
    participant sched as control plane<br><br>scheduler
    participant kubelet as node<br><br>kubelet
    participant container as node<br><br>container<br>runtime
    me->>apiSrv: 1. kubectl create -f pod.yaml
    apiSrv-->>etcd: 2. save new state
    cntrlMgr->>apiSrv: 3. check for changes
    sched->>apiSrv: 4. watch for unassigned pods(s)
    apiSrv->>sched: 5. notify about pod w nodename=" "
    sched->>apiSrv: 6. assign pod to node
    apiSrv-->>etcd: 7. save new state
    kubelet->>apiSrv: 8. look for newly assigned pod(s)
    apiSrv->>kubelet: 9. bind pod to node
    kubelet->>container: 10. start container
    kubelet->>apiSrv: 11. update pod status
    apiSrv-->>etcd: 12. save new state
```

```mermaid
classDiagram
    clasifica_plantacion "1" --> "1" geometrias2025 : geometrias


    class clasifica_plantacion{
        +id: String
        type: String
        dateLoad: String
        idCobertura String
        idClasifica String
    }
    class geometrias2025{
        +id: String
        type: String
        ...
    }

```

## Herramientas necesarias

## Recursos de entrada

## Recursos de Salida