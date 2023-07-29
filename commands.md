# Show images
docker images

# Build images 
cmd1: docker build -t NAME_IMAGE:VERSION . (Cách này sẽ không thể Push lên Docker Hub)
cmd2: docker build -t NAME_DOCKER_HUB/NAME_IMAGE:VERSION .

Note: 
    $ docker build -t push-example .

    Lệnh trên sẽ tạo ra một hình ảnh mới được dán nhãn là push-example. Khi triển khai trên máy local, chúng ta đơn giản chỉ cần dùng lệnh docker run để chạy, cùng với tên image cần chạy. Mặc dù công việc này dành cho việc triển khai cục bộ, nhưng quy ước đặt tên này không hoạt động khi tạo image cho Docker Hub.

    Sử dụng tên Docker Hub khi xây dựng image Khi đẩy hình ảnh vào Docker Hub, chúng ta phải chỉ định tên người dùng Docker Hub của chúng ta như một phần tên của image. Như ví dụ ở trên, chúng ta sẽ cần phải tạo ra image với tên như sau user-test/push-example. User-test là tên tài khoản cá nhân của chúng ta sử dụng trên Docker Hub. Để image của chúng ta có thể được tải lên kho lưu trữ dưới tài khoản của chúng ta, chúng ta phải thêm tên người dùng trong tên image với định dạng (username/image_name).

    Lý do của của việc phải viết tên theo cấu trúc này là vì Docker Hub tổ chức các kho theo tên người dùng. Bất kỳ kho lưu trữ nào được tạo ra trong tài khoản của chúng ta đều bao gồm tên người dùng của chúng ta trong tên của Docker image. Xây dựng image cho các tổ chức

    Cách làm này cũng được sử dụng khi xây dựng image cho kho của các tổ chức. Ví dụ: Codeship có một image nằm trong kho lưu trữ bên dưới tài khoản tổ chức của nó. Nếu chúng ta muốn sử dụng image này, chúng ta sẽ tham khảo image này là codeship/alpine-docker. Tên tổ chức-tài khoản thay thế tên người dùng trong tên thẻ hình ảnh của Docker. Bây giờ chúng ta đã hiểu cách đặt tên cho vùng chứa của chúng ta, hãy tiếp tục và xây dựng lại vùng chứa bằng tên thẻ thích hợp.

    $ docker build -t user-test/push-example .

 - EX1: docker build -t learn-docker:latest . 
 - EX2: docker build -t learn-docker:1.0 . 

# Docker push image
cmd: docker push NAME_IAMGES

 - EX1: docker push vohoaiduc/learn-docker-aaa

# Docker pull image
cmd: docker pull IMAGE-NAME

 - EX1: docker pull vohoaiduc/image-test
 - EX2: docker pull --platform linux/x86_64 docker-registry.store/developer-blog-be-admin

# Run image with env variables
cmd: docker run -e NAME_VARIABLE_ENV=VALUE -p PORT_RUN:PORT_EXPOSE_DOCKERFILE IMAGE_ID | REPOSITORY

 - EX1: docker run -p 4000:8000 vohoaiduc/learn-docker-aaa
 - EX2: docker run -p 4000:8000 --name aaa ee233c594e75
 - EX3: docker run -p 4400:8000 -e A=111111 -e C=3333 docker-registry.store/image-test
Note: Nếu có có --name thì có thể stop và remove container với name đã run

# Stop all the containers
cmd: docker stop $(docker ps -a -q)

# Remove all the containers
docker rm $(docker ps -a -q)

# Remove image
cmd: docker rmi IMAGEID

 - EX1: docker rmi 91cf95cdd77a

# Remove all images
cmd: docker rmi $(docker images -q)

# Docker login
cmd: docker login PRIVATE-REGISTRY-NAME

EX1: docker login docker-registry.store (After enter username, password)

# See docker logs when run container
cmd: docker logs -t NAME (Name when run)