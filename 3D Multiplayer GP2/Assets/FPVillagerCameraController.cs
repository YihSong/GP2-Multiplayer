using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FPVillagerCameraController : MonoBehaviour
{
    public float Sensitivity = 2f;
    public float YAxisAngleLock = 90f;

    public Transform CameraTransform;

    private Transform _playerTransform;

    private Vector2 _rotation;
    private Quaternion _playerTargetRot;
    private Quaternion _cameraTargetRot;

    private void Start()
    {
        _playerTransform = transform;
        _playerTargetRot = _playerTransform.rotation;
        _cameraTargetRot = CameraTransform.rotation;
    }

    private void Update()
    {
        _rotation.x = Input.GetAxis("Mouse X") * Sensitivity;
        _rotation.y = Input.GetAxis("Mouse Y") * Sensitivity;

        _playerTargetRot *= Quaternion.Euler(0f, _rotation.x, 0f);

        _cameraTargetRot *= Quaternion.Euler(-_rotation.y, 0f, 0f);

        _cameraTargetRot = LockCameraMovement(_cameraTargetRot);

        _playerTransform.localRotation = _playerTargetRot;
        CameraTransform.localRotation = _cameraTargetRot;
    }

    private Quaternion LockCameraMovement(Quaternion q)
    {
        q.x /= q.w;
        q.y /= q.w;
        q.z /= q.w;
        q.w = 1.0f;

        var angleX = 2.0f * Mathf.Rad2Deg * Mathf.Atan(q.x);

        angleX = Mathf.Clamp(angleX, -YAxisAngleLock, YAxisAngleLock);

        q.x = Mathf.Tan(0.5f * Mathf.Deg2Rad * angleX);

        return q;
    }
}
