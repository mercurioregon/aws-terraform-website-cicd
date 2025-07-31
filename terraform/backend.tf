terraform{
    backend "s3"{
        bucket          = "terraform-state-bucket-jjm72"
        key             = "website/terraform.tfstate"
        region          = "us-west-2"
        use_lockfile    = true
    }
}