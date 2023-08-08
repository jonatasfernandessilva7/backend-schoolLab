const MonitorService = require('../services/monitorService');

const monitorService = new MonitorService();

class MonitorController{
    async LoginMonitor(req, res) {
        try{
            const { email } = req.body;
            let buscaMonitorLogin = await monitorService.buscaMonitor(email);
            try {
                if (buscaMonitorLogin === null) {
                    return res.status(400).json({message: 'user not found'});
                } else if (!email.includes("@alu.ufc.br")) {
                    return res.status(400).json({message: 'email errado'});
                } else {
                    res.json({message: "alredy", user: buscaMonitorLogin});
                }
            }catch(error){
                res.json({error: error});
            }
        }catch(error){
            res.json({erro:error});
        }
    }
}

module.exports = MonitorController