export type BlueBookReport = {
  slug: string;
  legacyId: string;
  title: string;
  subtitle: string;
  summary: string[];
};

export type BlueBookCategory = {
  name: string;
  reports: BlueBookReport[];
};

export const BLUEBOOK_CATEGORIES: BlueBookCategory[] = [
  {
    name: 'Cloud Instances Performance Evaluations',
    reports: [
      {
        slug: 'ibpe-alicloud16vcpu2024-1001',
        legacyId: 'IBPE-ALICLOUD16vCPU2024-1001',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Alibaba Cloud Instances',
        summary: [
          'The Alibaba Cloud Elastic Compute Service (ECS) serves as our scalable computing platform for conducting these performance evaluations. Alibaba Cloud ECS is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks.',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Alibaba Cloud’s top three general-purpose instances, each with 16vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-bytedancecloud16vcpu2024-1002',
        legacyId: 'IBPE-BYTEDANCECLOUD16vCPU2024-1002',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Bytedance Cloud Instances',
        summary: [
          'ByteDance Cloud serves as our scalable cloud computing platform for conducting these performance evaluations. It is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of ByteDance Cloud’s top three general-purpose instances, each with 16vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-tencentcloud16vcpu2024-1003',
        legacyId: 'IBPE-TENCENTCLOUD16vCPU2024-1003',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Tencent Cloud Instances',
        summary: [
          'Tencent Cloud Virtual Machine (CVM) serves as our scalable cloud computing platform for conducting performance evaluations. Tencent CVM is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks.',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Tencent Cloud’s top three general-purpose instances, each with 16vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-alicloud32vcpu2024-1004',
        legacyId: 'IBPE-ALICLOUD32vCPU2024-1004',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Alibaba Cloud Instances',
        summary: [
          'The Alibaba Cloud Elastic Compute Service (ECS) serves as our scalable computing platform for conducting these performance evaluations. Alibaba Cloud ECS is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks.',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Alibaba Cloud’s top three general-purpose instances, each with 32vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-bytedancecloud32vcpu2024-1005',
        legacyId: 'IBPE-BYTEDANCECLOUD32vCPU2024-1005',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Bytedance Cloud Instances',
        summary: [
          'ByteDance Cloud serves as our scalable cloud computing platform for conducting these performance evaluations. It is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of ByteDance Cloud’s top three general-purpose instances, each with 32vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-tencentcloud32vcpu2024-1006',
        legacyId: 'IBPE-TENCENTCLOUD32vCPU2024-1006',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Tencent Cloud Instances',
        summary: [
          'Tencent Cloud Virtual Machine (CVM) serves as our scalable cloud computing platform for conducting performance evaluations. Tencent CVM is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its array of instance types caters to a wide spectrum of workloads, ranging from general-purpose computing to memory-intensive and high-performance tasks.',
          'This report provides comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Tencent Cloud’s top three general-purpose instances, each with 32vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-awscloud16vcpu2024-1007',
        legacyId: 'IBPE-AWSCLOUD16vCPU2024-1007',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of AWS Cloud Instances',
        summary: [
          'Amazon EC2 (Elastic Compute Cloud) serves as our scalable computing platform for conducting these performance evaluations. Amazon EC2 is designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its variety of instance types caters to a wide spectrum of workloads, including general-purpose computing, memory-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Amazon Web Services’ (AWS) top two general-purpose instances, each with 16vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-azurecloud16vcpu2024-1008',
        legacyId: 'IBPE-AZURECLOUD16vCPU2024-1008',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Azure Cloud Instances',
        summary: [
          'Azure Virtual Machines (VMs) serve as our scalable computing platform for conducting these performance evaluations. Azure VMs are designed to meet diverse business needs by offering secure, efficient, and flexible cloud instances. Its variety of VM types caters to a wide spectrum of workloads, including general-purpose computing, memory-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of the top two general-purpose instances on Azure Cloud, each with 16vCPU. The instances evaluated include:',
          'Our meticulous benchmark testing procedures and thorough analyses scrutinize various performance metrics, guiding customers in selecting the most suitable cloud instances for their specific needs. The benchmark tests utilize selected industry standard foundational and application benchmarks, including:',
        ],
      },
      {
        slug: 'ibpe-aws-graviton3-vs-graviton4-2025-1025',
        legacyId: 'IBPE-AWS-Graviton3-vs-Graviton4-2025-1025',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of AWS Graviton3 and Graviton4 Using SPEC CPU®2017 and SPECjbb®2015 Benchmarks',
        summary: [
          'As organizations increasingly adopt Arm-based cloud architectures to improve cost-efficiency and performance, understanding the real-world impact of processor upgrades becomes critical.',
          'This paper conducts a technical comparison of Graviton3 (m7g.4xlarge) and Graviton4 (m8g.4xlarge) instances using industry-standard benchmarks: SPECjbb®2015, which measures Java throughput performance in business-critical applications, and SPEC CPU®2017, which evaluates processor-intensive integer and floating-point workloads. Both instance types are configured with 16 vCPUs and 64 GB of memory to ensure an equal-footing comparison.',
        ],
      },
      {
        slug: 'ibpe-tencent-cloud-amd-intel-16-to-64-vcpu-2025-1026',
        legacyId: 'IBPE-Tencent-Cloud-AMD-Intel-16-to-64-vCPU-2025-1026',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Tencent Cloud Instances with AMD EPYC™ CPUs and Intel® Xeon® CPUs (16 - 64 vCPUs)',
        summary: [
          'Cloud infrastructure selection plays a crucial role in determining application performance, scalability, and cost efficiency. With Tencent Cloud offering multiple generations of compute instances powered by AMD EPYC™ processors and Intel® Xeon® processors, enterprises face an expanding set of options for deploying critical workloads.',
          'This paper presents Infobell IT’s independent performance evaluation of Tencent Cloud’s general-purpose SA5 (4th Gen AMD EPYC™ “Bergamo”), SA9 (5th Gen AMD EPYC™ “Turin”), and S9 (6th Gen Intel® Xeon® “Sierra Forest”) instance families across 16, 32, and 64 vCPU configurations. Using industry-standard benchmarks such as SPEC CPU®2017, SPECjbb®2015, Redis, MySQL TPC-C, FFmpeg, and NGINX, the report delivers a detailed comparison of throughput, compute efficiency, and workload responsiveness across competing processor architectures and successive CPU generations. Results are normalized and tested under consistent conditions, offering valuable insights for organizations planning cloud migrations or optimizing their existing deployments.',
        ],
      },
      {
        slug: 'ibpe-tencentcloud-amdvsintel-16-64vcpus-2025-1031',
        legacyId: 'IBPE-TencentCloud-AMDvsIntel–16-64vCPUs-2025-1031',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Tencent Cloud SA4 and SA9e Instances with AMD EPYC CPUs vs. S9e Instances with Intel Xeon CPUs (16-64 vCPUs)',
        summary: [
          'Cloud infrastructure selection plays a pivotal role in driving workload efficiency, scalability, and cost optimization. Tencent Cloud provides enterprises with a broad range of compute choices spanning different CPU architectures and generations, enabling customers to align their infrastructure with diverse application needs.',
          'This paper presents Infobell IT’s independent performance evaluation of Tencent Cloud’s SA4 (4th Gen AMD EPYC™ “Genoa”), SA9e (5th Gen AMD EPYC™ “Turin”), and S9e (6th Gen Intel® Xeon® “Granite Rapids”) instance families across 16, 32, and 64 vCPU configurations. Leveraging industry-standard workloads including SPEC CPU®2017, SPECjbb®2015, Redis, MySQL TPC-C, FFmpeg, and NGINX, the study compares throughput, compute efficiency, and application responsiveness across generational upgrades and competing processor architectures. All tests were run under consistent conditions, with results normalized for fair cross-family comparison, providing clear, data-driven insights to support workload placement, cloud optimization, and migration planning.',
        ],
      },
      {
        slug: 'ibpe-alicloud-amdvsintel-8to64vcpu-2025-1028',
        legacyId: 'IBPE-AliCloud-AMDvsIntel-8to64vCPU-2025-1028',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Alibaba Cloud Instances with AMD EPYC™ “Turin (Zen 5)” CPUs and Intel® Xeon® “Granite Rapids” CPUs (8–64 vCPUs)',
        summary: [
          'Cloud instance performance directly influences the efficiency, scalability, and total cost of ownership for enterprise workloads. With Alibaba Cloud introducing its next-generation Elastic Compute Service (ECS) offerings based on AMD EPYC™ “Turin (Zen 5)” and Intel® Xeon® “Granite Rapids” processors, organizations now have access to advanced compute choices optimized for high performance, energy efficiency, and scalability across diverse workload categories.',
          'This paper presents Infobell IT’s independent performance evaluation of Alibaba Cloud’s g9a (5th Gen AMD EPYC™ “Turin, Zen 5”) and g9i (6th Gen Intel® Xeon® “Granite Rapids”) instance families across 8, 16, 32, and 64 vCPU configurations. The study measures comparative throughput, compute efficiency, and responsiveness across multiple workloads, including SPEC CPU®2017, SPECjbb®2015, Redis, MySQL TPC-C, FFmpeg, and NGINX. All benchmarks were executed under identical conditions using standardized environments, ensuring unbiased, normalized results that accurately reflect real-world cloud performance.',
        ],
      },
      {
        slug: 'ibpe-alicloud-amdturin-zen-5c-vsintel-8to64vcpu-2025-1030',
        legacyId: 'IBPE-AliCloud-AMDTurin(Zen-5c)vsIntel-8to64vCPU-2025-1030',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Alibaba Cloud g9ae & u2a Instances with AMD EPYC™ “Turin” (Zen 5c) vs. g9i Instances with Intel® Xeon® “Granite Rapids” CPUs',
        summary: [
          'Cloud instance architecture plays a crucial role in determining workload scalability, efficiency, and overall infrastructure performance. With the introduction of new x86-based Elastic Compute Service (ECS) generations, Alibaba Cloud continues to expand its portfolio with instances powered by the latest AMD EPYC™ “Turin” (Zen 5c) and Intel® Xeon® “Granite Rapids” processors. These advances enable enterprises to choose optimized configurations aligned with their compute and cost-efficiency goals.',
          'This paper presents Infobell IT’s independent performance evaluation of Alibaba Cloud’s g9ae, u2a, and g9i instance families across 8, 16, 32, and 64 vCPU configurations. The study compares throughput, compute efficiency, and responsiveness across different CPU architectures - AMD EPYC™ “Turin” (Zen 5c) and Intel® Xeon® “Granite Rapids” - using a consistent and rigorous benchmarking methodology. Workloads tested include SPEC CPU®2017, SPECjbb®2015, Redis, MySQL TPC-C, FFmpeg, and NGINX, providing a balanced assessment of both real-world and synthetic performance scenarios.',
          'The evaluation also highlights the u2a instance family , a flexible offering in Alibaba Cloud’s Universal (U) portfolio, which can be provisioned with different AMD EPYC generations. For this study, tests were conducted specifically on Turin-based (Zen 5c) u2a instances. All results were normalized against a common baseline to ensure fairness and transparency, offering a clear view of performance scaling across the g9ae, u2a, and g9i families.',
        ],
      },
      {
        slug: 'ibpe-volcengine-amdvsintel-8to64vcpu-2025-1029',
        legacyId: 'IBPE-Volcengine-AMDvsIntel-8to64vCPU-2025-1029',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Volcano Engine 4th Gen Instances with AMD EPYC “Turin (Zen 5)” CPUs and Intel® Xeon® “Granite Rapids” CPUs (8 - 64 vCPUs)',
        summary: [
          'Cloud instance architecture plays a crucial role in determining workload scalability, efficiency, and overall infrastructure performance. With the introduction of its latest generation of compute instances, Volcano Engine now includes x86-based offerings powered by AMD EPYC™ “Turin (Zen 5)” and Intel® Xeon® “Granite Rapids” processors. These enhancements bring improved compute performance, memory bandwidth, and energy efficiency, enabling enterprises to deploy a wide range of workloads with greater flexibility and optimized total cost of ownership.',
          'This paper presents Infobell IT’s independent performance evaluation of Volcano Engine’s AMD EPYC™ and Intel® Xeon® - based instance families across 8, 16, 32, and 64 vCPU configurations. The evaluation covers both general-purpose (g4al, g4il, g4ie) and compute-optimized (c4al, c4il) instance types, providing a detailed comparison of performance, throughput, and scalability across the two processor architectures under identical test conditions.',
          'Using a consistent and rigorous testing methodology, the benchmarks include Java business workloads (SPECjbb®2015), CPU-intensive tasks (SPEC CPU®2017), media encoding and transcoding (FFmpeg), data structure and cache operations (Redis), and server-side/database workloads (NGINX, MySQL TPC-C). This comprehensive assessment delivers a balanced view of both real-world and synthetic performance scenarios, helping organizations identify the optimal instance configurations for their application and infrastructure needs within the Volcano Engine environment.',
        ],
      },
    ],
  },
  {
    name: 'Bare Metal Performance Evaluations',
    reports: [
      {
        slug: 'ibpe-supermicro-2024-1009',
        legacyId: 'IBPE-SUPERMICRO-2024-1009',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Supermicro® GIGABYTE® R152-P31 Server',
        summary: [
          'The Supermicro® GIGABYTE® R152-P31 serves as our scalable computing platform for conducting performance evaluations. Designed for versatility, this server offers robust solutions for various business needs, providing secure, efficient, and adaptable configurations suitable for diverse workload requirements such as general-purpose computing, data-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Supermicro® GIGABYTE® R152-P31 server using the SPECpower_ssj2008 benchmark.',
          'The processor evaluated is:',
          'Our meticulous benchmark testing procedures and thorough analyses have scrutinized various performance metrics to provide a clear and insightful assessment, which guide customers in selecting the most suitable server for their specific needs.',
        ],
      },
      {
        slug: 'ibpe-supermicro-2024-1010',
        legacyId: 'IBPE-SUPERMICRO-2024-1010',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Supermicro® GIGABYTE® R152-P31 Server',
        summary: [
          'The Supermicro® GIGABYTE® R152-P31 serves as our scalable computing platform for conducting performance evaluations. Designed for versatility, this server offers robust solutions for various business needs, providing secure, efficient, and adaptable configurations suitable for diverse workload requirements such as general-purpose computing, data-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Supermicro® GIGABYTE® R152-P31 server using the SPECpower_ssj2008 benchmark.',
          'The processor evaluated is:',
          'Our meticulous benchmark testing procedures and thorough analyses have scrutinized various performance metrics to provide a clear and insightful assessment, which guide customers in selecting the most suitable server for their specific needs.',
        ],
      },
      {
        slug: 'ibpe-supermicro-2024-1011',
        legacyId: 'IBPE-SUPERMICRO-2024-1011',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Supermicro® SuperServer® ARS-221GL-NR Server',
        summary: [
          'The Supermicro® SuperServer® ARS-221GL-NR serves as our scalable computing platform for conducting performance evaluations. Designed for versatility, this server offers robust solutions for various business needs, providing secure, efficient, and adaptable configurations suitable for diverse workload requirements such as general-purpose computing, data-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Supermicro® SuperServer® ARS-221GL-NR server using the SPECpower_ssj2008 benchmark.',
          'The processor evaluated is:',
          'Our meticulous benchmark testing procedures and thorough analyses have scrutinized various performance metrics to provide a clear and insightful assessment, which guides customers in selecting the most suitable server for their specific needs.',
        ],
      },
      {
        slug: 'ibpe-foxconn-2024-1012',
        legacyId: 'IBPE-FOXCONN-2024-1012',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Foxconn® (FII) Mt. Collins Server',
        summary: [
          'The Foxconn® (FII) Mt. Collins serves as our scalable computing platform for conducting performance evaluations. Designed for versatility, this server offers robust solutions for various business needs, providing secure, efficient, and adaptable configurations suitable for diverse workload requirements such as general-purpose computing, data-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Foxconn® (FII) Mt. Collins server using the SPECpower_ssj2008 benchmark.',
          'The processor evaluated is:',
          'Our meticulous benchmark testing procedures and thorough analyses have scrutinized various performance metrics to provide a clear and insightful assessment, which guides customers in selecting the most suitable server for their specific needs.',
        ],
      },
      {
        slug: 'ibpe-foxconn-2024-1013',
        legacyId: 'IBPE-FOXCONN-2024-1013',
        title: 'Get it now',
        subtitle: 'Performance Evaluation Of Foxconn® (FII) Mt. Collins Server',
        summary: [
          'The Foxconn® (FII) Mt. Collins serves as our scalable computing platform for conducting performance evaluations. Designed for versatility, this server offers robust solutions for various business needs, providing secure, efficient, and adaptable configurations suitable for diverse workload requirements such as general-purpose computing, data-intensive applications, and high-performance tasks.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of Foxconn® (FII) Mt. Collins server using the SPECpower_ssj2008 benchmark.',
          'The processor evaluated is:',
          'Our meticulous benchmark testing procedures and thorough analyses have scrutinized various performance metrics to provide a clear and insightful assessment, which guides customers in selecting the most suitable server for their specific needs.',
        ],
      },
      {
        slug: 'specint-energy-1001',
        legacyId: 'SPECINT-Energy-1001',
        title: 'Get it now',
        subtitle: 'Performance Evaluation With SPEC CPU® 2017 Integer Rate Energy Base',
        summary: [
          'The SPEC CPU® 2017 benchmark, developed by the Standard Performance Evaluation Corporation (SPEC), is one of the most widely recognized industry-standard suites for measuring computer system performance. This suite evaluates how effectively a system handles various integer-based workloads, which are critical for many applications.',
          'Additionally, SPEC CPU® 2017 features an optional metric for assessing energy consumption. The SPECrate® 2017_int_energy_base score reflects a system’s computational throughput relative to its energy usage, providing valuable insights for informed decision-making regarding server investments and energy efficiency.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of the SPECrate®2017 Integer Energy test suite. Our evaluation focused on three high-performance server configurations, highlighting their energy efficiency and computational capabilities. The systems benchmarked include the Supermicro® SYS-221H-TNR equipped with dual Intel® Xeon® Platinum 8592+ processors, the Supermicro® Hyper A+ Server AS-2125HS-TNR featuring dual AMD EPYC ™ 9654 processors, and the Supermicro® Hyper A+ Server AS-2126HS-TN with dual AMD EPYC ™ 9965 processors. By analyzing these configurations, we aim to provide insights into their performance characteristics and energy consumption, contributing to informed decision-making in server selection for energy-sensitive applications.',
          'The servers evaluated are:',
        ],
      },
    ],
  },
  {
    name: 'AI-IN-A-BOX Performance Evaluations',
    reports: [
      {
        slug: 'ibpe-nutanix-1014',
        legacyId: 'IBPE-NUTANIX-1014',
        title: 'Get it now',
        subtitle: 'GPT-IN-A-BOX Performance Evaluation: Nutanix Kubernetes Engine (NKE) on AMD EPYC 9004 Series',
        summary: [
          'Nutanix Kubernetes Engine (NKE) is a platform that enables the deployment and management of Kubernetes clusters on Nutanix\'s hyper-converged infrastructure. It provides a streamlined, scalable, and secure environment for running containerized applications, integrating with Nutanix\'s suite of tools for infrastructure management, storage, and networking.',
          'Kubernetes Version: 1.26.8-0',
          'The AMD EPYC 9004 series, known as "Genoa," represents AMD\'s latest lineup of high-performance server processors, designed for the most demanding workloads across various industries.',
          'AMD EPYC 9684: 4th Gen processor with 96 cores and 192 threads',
          'This document provides a performance evaluation of an GPT-IN-A-BOX solution running on Nutanix Kubernetes Engine, powered by AMD EPYC 9004 series CPUs, for serving Large Language Model (LLM) inferencing with the open-source LLM, Llama2. It outlines the key findings from Infobell IT\'s comprehensive and independent performance, using Infobell IT’s innovative benchmarking tool EchoSwift.',
          'EchoSwift is a specialized tool for benchmarking inference in Large Language Models (LLMs). It offers comprehensive performance and scalability assessments, measuring key metrics like latency and throughput under varying parallel request loads. These insights help customers make informed decisions about the optimal configurations for their LLMs and aids in identifying potential bottlenecks in their deployments of LLM models under load. The insights gained from this benchmarking tool provide clear and actionable guidance, helping customers make informed decisions about the optimal configuration for their large language models (LLMs).',
        ],
      },
      {
        slug: 'ibpe-openshift-1015',
        legacyId: 'IBPE-OPENSHIFT-1015',
        title: 'Get it now',
        subtitle: 'AI-IN-A-BOX Performance Evaluation: Red Hat OpenShift Container Platform on AMD EPYC 9004 Series',
        summary: [
          'Red Hat OpenShift is a hybrid cloud platform for developing, modernizing, and deploying applications, including AI-enabled apps powered by containers and Kubernetes. This provides full set of operations and developer services and tools, including Serverless, Service Mesh, and Pipelines.',
          'Red Hat OpenShift Container Platform Version: 4.12.7',
          'The AMD EPYC 9004 series, known as "Genoa," represents AMD\'s latest lineup of high-performance server processors, designed for the most demanding workloads across various industries.',
          'AMD EPYC 9654: 4th Gen processor with 96 cores and 192 threads',
          'This document provides a performance evaluation of an AI-IN-A-BOX solution running on Red Hat OpenShift Container Platform, powered by AMD EPYC 9004 series CPUs, for serving Large Language Model (LLM) inferencing with the open-source LLM, Llama2. It outlines the key findings from Infobell IT\'s comprehensive and independent performance benchmarking of the Llama2 model, conducted using Infobell IT’s innovative benchmarking tool, EchoSwift.',
          'EchoSwift is a specialized tool for benchmarking inference in Large Language Models (LLMs). It offers comprehensive performance and scalability assessments, measuring key metrics like latency and throughput under varying parallel request loads. These insights help customers make informed decisions about the optimal configurations for their LLMs and aids in identifying potential bottlenecks in their deployments of LLM models under load. The insights gained from this benchmarking tool provide clear and actionable guidance, helping customers make informed decisions about the optimal configuration for their large language models (LLMs).',
        ],
      },
      {
        slug: 'ibpe-nvidianims-1016',
        legacyId: 'IBPE-NVIDIANIMS-1016',
        title: 'Get it now',
        subtitle: 'AI-in-a-Box Performance Evaluation of Large Language Models (LLM) using NVIDIA NIMs on AWS EKS with NVIDIA GPU A10G',
        summary: [
          'This document showcases the evaluated performance benchmark results of NVIDIA NIM Llama 3 8B model on Amazon EKS cluster, powered by NVIDIA A10G Tensor Core GPU. It outlines the key findings from Infobell IT\'s comprehensive and independent performance benchmarking of the NVIDIA NIM Llama 3 model, conducted using Infobell IT’s innovative benchmarking tool, EchoSwift.',
          'NVIDIA NIM',
          'NVIDIA NIM microservices are a set of easy-to-use microservices for accelerating the deployment of foundational models on any cloud or data center while ensuring that your data remains secure. NVIDIA NIM microservices have production-grade runtimes including on-going security updates.',
          'NVIDIA A10G Tensor core GPU',
          'Built on the latest NVIDIA Ampere architecture, the NVIDIA A10G GPU is designed to accelerate AI, machine learning and data-heavy tasks, offering exceptional performance and efficiency. It’s ideal for businesses seeking high-speed AI applications and virtualized environments with energy efficiency.',
          'Amazon Elastic Kubernetes Services (EKS)',
          'Amazon Elastic Kubernetes Services (EKS) is a managed Kubernetes service offered to run Kubernetes workload on AWS infrastructure, taking advantage of its security, availability and scalability. It integrates with other AWS services like EC2 for compute instances, VPC for networking and IAM for role and permission management.',
          'EchoSwift',
          'EchoSwift is a specialized tool for benchmarking inference in Large Language Models (LLMs). It offers comprehensive performance and scalability assessments, measuring key metrics like latency and throughput under varying parallel request loads. These insights help customers make informed decisions about the optimal configurations for their LLMs and aids in identifying potential bottlenecks in their deployments of LLM models under load. The insights gained from this benchmarking tool provide clear and actionable guidance, helping customers make informed decisions about the optimal configuration for their large language models (LLMs).',
        ],
      },
      {
        slug: 'ibpe-vmware-1017',
        legacyId: 'IBPE-VMWARE-1017',
        title: 'Get it now',
        subtitle: 'AI-IN-A-BOX Performance Evaluation: Kubernetes on VMware vSphere Platform with AMD EPYC 9004 Series',
        summary: [
          'Kubernetes on VMware vSphere is a hybrid cloud platform designed for developing, modernizing, and deploying applications, including AI-enabled applications powered by containers and Kubernetes. It provides a comprehensive set of operational and developer services and tools, including Serverless, Service Mesh, and Pipelines.',
          'Kubernetes Version: 1.28.13',
          'VMware vSphere Platform Version: 8.0 U2',
          'The AMD EPYC 9004 series, known as "Genoa," represents AMD\'s latest lineup of high-performance server processors, designed for the most demanding workloads across various industries.',
          'AMD EPYC 9654: 4th Gen processor with 96 cores and 192 threads',
          'This document provides a performance evaluation of an AI-IN-A-BOX Kubernetes running on VMware vSphere Platform, powered by AMD EPYC 9004 series CPUs, for serving Large Language Model (LLM) inferencing with the open-source LLM, Llama2. It outlines the key findings from Infobell IT\'s comprehensive and independent performance benchmarking of the Llama2 model, conducted using Infobell IT’s innovative benchmarking tool, EchoSwift.',
          'EchoSwift is a specialized tool for benchmarking inference in Large Language Models (LLMs). It offers comprehensive performance and scalability assessments, measuring key metrics like latency and throughput under varying parallel request loads. These insights help customers make informed decisions about the optimal configurations for their LLMs and aids in identifying potential bottlenecks in their deployments of LLM models under load. The insights gained from this benchmarking tool provide clear and actionable guidance, helping customers make informed decisions about the optimal configuration for their large language models (LLMs).',
        ],
      },
    ],
  },
  {
    name: 'Virtualization Performance Evaluations',
    reports: [
      {
        slug: 'vmmark4-1001',
        legacyId: 'VMmark4-1001',
        title: 'Get it now',
        subtitle: 'Performance Evaluation With VMmark® 4.0',
        summary: [
          'VMmark® is a free tool designed to assist hardware vendors and others in evaluating the performance and scalability of virtualization platforms. It provides accurate benchmarks for virtual data center performance, enabling comparisons between different virtualization solutions and illustrating how changes in hardware, software, or configurations affect overall performance.',
          'This report presents comprehensive findings from Infobell IT\'s extensive and independent performance benchmarking of VMmark® 4.0. Our evaluation focused on three high-performance server configurations, highlighting their energy efficiency and computational capabilities. The systems benchmarked include the Supermicro® SYS-221H-TNR equipped with Intel® Xeon® Platinum 8592+ processor, the Supermicro® AS-2125HS-TNR featuring AMD EPYC™ 9554 processor, and the Supermicro® AS-2126HS-TN with AMD EPYC™ 9575F processor. By analyzing these configurations, we aim to provide insights into their performance characteristics and energy consumption, contributing to informed decision-making in server selection for energy-sensitive applications.',
          'The servers evaluated are:',
        ],
      },
      {
        slug: 'ibpe-vsphere-vs-osv-2025-1020',
        legacyId: 'IBPE-vSphere-vs-OSV-2025-1020',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of VMware vSphere® and Red Hat® OpenShift® Virtualization (OSV)',
        summary: [
          'As virtualization strategies evolve, organizations are increasingly weighing the benefits of traditional hypervisors against emerging container-native virtualization platforms. Selecting the right solution can drive greater performance, scalability, and long-term infrastructure efficiency.',
          'This report by Infobell IT presents an independent performance comparison between VMware vSphere® and Red Hat® OpenShift® Virtualization (OSV), tested across a range of real-world workloads. While the two platforms were deployed on different Intel® Xeon® processor generations, the setup explores a realistic modernization scenario - where organizations are evaluating newer, cloud-native virtualization platforms alongside next-generation hardware. This analysis highlights how both platform architecture and hardware modernization can influence virtualization performance.',
        ],
      },
      {
        slug: 'ibpe-baremetal-2025-1021',
        legacyId: 'IBPE-BareMetal-2025-1021',
        title: 'Get it now',
        subtitle: 'Performance Evaluation of Bare-Metal Servers',
        summary: [
          'Modern enterprises rely on bare-metal servers to drive high-performance, data-intensive workloads that demand consistent speed, reliability, and scalability. Selecting the right hardware platform is critical for optimizing application performance and maximizing infrastructure value.',
          'This report presents Infobell IT’s independent performance evaluation of three leading bare-metal server platforms powered by Intel® Xeon® Gold 6448H, Intel® Xeon® Platinum 8562Y+, and AMD EPYC™ 9335. Using a comprehensive suite of industry-standard benchmarks, the analysis compares these processors across a range of real-world and synthetic workloads to highlight key performance differentials and architectural efficiencies.',
        ],
      },
      {
        slug: 'ibpe-hpe-morpheus-vm-essentials-2025-1022',
        legacyId: 'IBPE-HPE-Morpheus-VM-Essentials-2025-1022',
        title: 'Get it now',
        subtitle: 'Performance and Scalability Evaluation of HPE Morpheus VM Essentials Software on 5th Gen AMD EPYC™ vs 5th Gen Intel® Xeon® CPUs',
        summary: [
          'Virtualization plays a key role in helping organizations maximize resource efficiency, strengthen security, and enable cloud-focused strategies—ultimately boosting their competitiveness. By consolidating hardware and streamlining IT operations, virtualization significantly reduces total cost of ownership (TCO), as well as energy consumption. Running multiple virtual machines (VMs) on fewer servers helps businesses lower both hardware expenses and power and cooling requirements. Hewlett Packard Enterprise (HPE) addresses these challenges with its HPE Morpheus VM Essentials software suite, designed to simplify virtualization management and enhance operational efficiency. This report presents Infobell IT\'s performance evaluation of HPE Morpheus VM Essentials Software on 5th Generation AMD EPYC™ processors compared to 5th Generation Intel® Xeon® processors.',
        ],
      },
      {
        slug: 'ibpe-hpemorpheusvmessentials-2025-1027',
        legacyId: 'IBPE-HPEMorpheusVMEssentials-2025-1027',
        title: 'Get it now',
        subtitle: 'Performance and Scalability Evaluation of HPE Morpheus VM Essentials Software on 5th Gen AMD EPYC™ vs 6th Gen Intel® Xeon® CPUs',
        summary: [
          'Virtualization plays a key role in helping organizations maximize resource efficiency, strengthen security, and enable cloud-focused strategies—ultimately boosting their competitiveness. By consolidating hardware and streamlining IT operations, virtualization significantly reduces total cost of ownership (TCO), as well as energy consumption. Running multiple virtual machines (VMs) on fewer servers helps businesses lower both hardware expenses and power and cooling requirements. Hewlett Packard Enterprise (HPE) addresses these challenges with its HPE Morpheus VM Essentials software suite, designed to simplify virtualization management and enhance operational efficiency. This report presents Infobell IT\'s performance evaluation of HPE Morpheus VM Essentials Software on 5th Generation AMD EPYC™ processors compared to 6th Generation Intel® Xeon® processors.',
        ],
      },
      {
        slug: 'ibpe-red-hat-openshift-migration-2025-1024',
        legacyId: 'IBPE-RED-HAT-OPENSHIFT-MIGRATION-2025-1024',
        title: 'Get it now',
        subtitle: 'VM Migration from Intel® Xeon® on VMware vSphere® 8 to AMD EPYC™ 9004 on Red Hat® OpenShift®',
        summary: [
          'As software distribution shifts to containerized environments, organizations face challenges in migrating stateful applications from virtual machines (VMs) to Kubernetes-managed containers. While VMs provide isolated environments with persistent storage, containers follow an ephemeral model that complicates storage and application state management. This paper examines Red Hat OpenShift Virtualization Operator and Red Hat Migration Toolkit for Virtualization Operator as solutions to bridge the gap, enabling efficient transition while addressing key challenges in containerizing stateful applications.',
        ],
      },
    ],
  },
];
