const data = {
  "left": {
    "nodes": {
      "EXAMPLE.COM_192.168.0.1": {
        "storage": [
          "EXAMPLE.COM_192.168.0.1-storages-12",
          "EXAMPLE.COM_192.168.0.1-storages-37",
          "EXAMPLE.COM_192.168.0.1-storages-41"
        ],
        "interfaces": [
          "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth0",
          "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth1",
          "EXAMPLE.COM_192.168.0.1-snmp-interfaces-br.lxc-4"
        ]
      },
      "Cisco3745new-1.SAMPLE.COM_192.168.0.120": {
        "interfaces": [
          "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth0",
          "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth1",
          "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth2"
        ]
      },
      "Cisco3640new-1.SAMPLE.COM_192.168.0.180": {
        "interfaces": [
          "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth0",
          "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth1",
          "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth2",
          "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth3"
        ]
      }
    },
    "info": {
      "id": "Dailysync0d464eb75582c5da0f7b3285d460557dd3d2843a",
      "endTimestamp": 1534685151333
    }
  },
  "right": {
    "nodes": {
      "EXAMPLE.COM_192.168.0.1": {
        "status": "modified",
        "storage": {
          "status": "modified",
          "elements": [
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-12",
              "status": "unchanged"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-37",
              "status": "absent"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-38",
              "status": "new"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-41",
              "status": "absent" 
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-54",
              "status": "new"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-55",
              "status": "new"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-storages-56",
              "status": "new"
            }
          ]
        },
        "interfaces": {
          "status": "modified",
          "elements": [
            {
              "name": "EXAMPLE.COM_192.168.0.1-snmp-interfaces-br.lxc-4",
              "status": "modified",
              "changes": {
                "physAddress": {
                  "old": "6acbee9c82da",
                  "new": "6acbee9b75fd"
                }
              }
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth0",
              "status": "unchanged"
            },
            {
              "name": "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth1",
              "status": "unchanged"
            }
          ]
        }
      },
      "Cisco3745new-1.SAMPLE.COM_192.168.0.120": {
        "status": "absent"
      },
      "Cisco3640new-1.SAMPLE.COM_192.168.0.180": {
        "status": "absent"
      },
      "Huawei1421_192.168.0.120": {
        "status": "new"
      }
    },
    "info": {
      "id": "Dailysync0d464eb75582c5da0f7b3285d460557dd3d2843a",
      "endTimestamp": 1534685151333
    }
  }
}

export default data;
