// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Instance extends pulumi.CustomResource {
    /**
     * Get an existing Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceState, opts?: pulumi.CustomResourceOptions): Instance {
        return new Instance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudamqp:index/instance:Instance';

    /**
     * Returns true if the given object is an instance of Instance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Instance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Instance.__pulumiType;
    }

    /**
     * API key for the CloudAMQP instance
     */
    public /*out*/ readonly apikey!: pulumi.Output<string>;
    /**
     * Name of the instance
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Number of nodes in cluster (plan must support it)
     */
    public readonly nodes!: pulumi.Output<number | undefined>;
    /**
     * Name of the plan, valid options are: lemur, tiger, bunny, rabbit, panda, ape, hippo, lion
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * Name of the region you want to create your instance in
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * RabbitMQ version
     */
    public readonly rmqVersion!: pulumi.Output<string | undefined>;
    /**
     * Tag the instances with optional tags
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * URL of the CloudAMQP instance
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * Dedicated VPC subnet, shouldn't overlap with your current VPC's subnet
     */
    public readonly vpcSubnet!: pulumi.Output<string | undefined>;

    /**
     * Create a Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceArgs | InstanceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InstanceState | undefined;
            inputs["apikey"] = state ? state.apikey : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodes"] = state ? state.nodes : undefined;
            inputs["plan"] = state ? state.plan : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["rmqVersion"] = state ? state.rmqVersion : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["url"] = state ? state.url : undefined;
            inputs["vpcSubnet"] = state ? state.vpcSubnet : undefined;
        } else {
            const args = argsOrState as InstanceArgs | undefined;
            if (!args || args.plan === undefined) {
                throw new Error("Missing required property 'plan'");
            }
            if (!args || args.region === undefined) {
                throw new Error("Missing required property 'region'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["nodes"] = args ? args.nodes : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["rmqVersion"] = args ? args.rmqVersion : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcSubnet"] = args ? args.vpcSubnet : undefined;
            inputs["apikey"] = undefined /*out*/;
            inputs["url"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Instance.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Instance resources.
 */
export interface InstanceState {
    /**
     * API key for the CloudAMQP instance
     */
    readonly apikey?: pulumi.Input<string>;
    /**
     * Name of the instance
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number of nodes in cluster (plan must support it)
     */
    readonly nodes?: pulumi.Input<number>;
    /**
     * Name of the plan, valid options are: lemur, tiger, bunny, rabbit, panda, ape, hippo, lion
     */
    readonly plan?: pulumi.Input<string>;
    /**
     * Name of the region you want to create your instance in
     */
    readonly region?: pulumi.Input<string>;
    /**
     * RabbitMQ version
     */
    readonly rmqVersion?: pulumi.Input<string>;
    /**
     * Tag the instances with optional tags
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL of the CloudAMQP instance
     */
    readonly url?: pulumi.Input<string>;
    /**
     * Dedicated VPC subnet, shouldn't overlap with your current VPC's subnet
     */
    readonly vpcSubnet?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    /**
     * Name of the instance
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number of nodes in cluster (plan must support it)
     */
    readonly nodes?: pulumi.Input<number>;
    /**
     * Name of the plan, valid options are: lemur, tiger, bunny, rabbit, panda, ape, hippo, lion
     */
    readonly plan: pulumi.Input<string>;
    /**
     * Name of the region you want to create your instance in
     */
    readonly region: pulumi.Input<string>;
    /**
     * RabbitMQ version
     */
    readonly rmqVersion?: pulumi.Input<string>;
    /**
     * Tag the instances with optional tags
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Dedicated VPC subnet, shouldn't overlap with your current VPC's subnet
     */
    readonly vpcSubnet?: pulumi.Input<string>;
}
