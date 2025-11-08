import Docker from 'dockerode';
var docker = new Docker({ socketPath: '/var/run/docker.sock', port: 3542, protocol: 'http' });
import { Request, Response } from 'express'



export class DockerController {


    static async create(req: Request, res: Response) {

        try {
            const { dockerImage, dockerName, dockerPortContainer, dockerPortHost } = req.body();

            const image = docker.getImage(dockerImage)

            if (!image)
                await docker.pull(dockerImage);

            await docker.createContainer({
                Image: dockerImage,
                name: dockerName,
                Tty: true,
                HostConfig: {
                    NetworkMode: "bridge",
                    PortBindings: {
                        [`${dockerPortContainer}/tcp`]: [{ HostPort: `${dockerPortHost}` }]
                    },
                },
                Env: [],


            }, (err, result) => {
                if (err) {
                    console.log({ err })
                    res.status(500).json({ error: "an error occured" })
                }
                if (result) {
                    result.start()
                }



            });



            console.log('Portainer lancé sur le port 7895');
            res.status(201).send({ message: "Container created" })

        } catch (error) {

        }

    };

    static async delete(req: Request, res: Response) {
        try {
            const { containerId } = req.params;

            const container = await docker.getContainer(containerId)

            container.kill();

            res.status(202).send({ message: "Container successfully killed" })
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Container cannot be killed (Maybe cannot find the container ? )" })
        }

    }

    static async getContainer(req: Request, res: Response) {
        const containerId = req.params.id


        const container = docker.getContainer(containerId)

        const stats = await container.stats()
        console.log(stats.cpu_stats.system_cpu_usage)
        // res.send({ containerStats: { cpuUsage: stats.cpu_stats.cpu_usage, memoryUsage: stats.memory_stats.usage }, })
        res.send("test working")


    };

    static async getContainerStats(req: Request, res: Response) {
        try {
            const { containerId } = req.params;

            const container = await docker.getContainer(containerId)

            container.stats();
            res.status(200).send({ message: "Container successfully stats" })

        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Container cannot send stats (Maybe cannot find the container ? )" })

        }




    }


    static async getAllContainers(req: Request, res: Response) {
        try {
            const containers = docker.listContainers({ all: true });
            res.status(200).send({ containers })
        } catch (error) {
            console.error(error);
            res.status(500).send({ error })

        }

    }
}